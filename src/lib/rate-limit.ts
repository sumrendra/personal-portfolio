// Simple in-memory rate limiter
// For production, consider using Redis or Upstash

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  interval: number; // in milliseconds
  maxRequests: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { interval: 60 * 1000, maxRequests: 3 } // Default: 3 requests per minute
): RateLimitResult {
  const now = Date.now();
  const key = identifier;

  if (!store[key] || store[key].resetTime < now) {
    store[key] = {
      count: 1,
      resetTime: now + config.interval,
    };
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      reset: store[key].resetTime,
    };
  }

  if (store[key].count >= config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      reset: store[key].resetTime,
    };
  }

  store[key].count++;
  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - store[key].count,
    reset: store[key].resetTime,
  };
}
