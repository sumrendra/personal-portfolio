# Docker Deployment Guide for Portainer

This guide explains how to deploy your Next.js portfolio on your local server using Docker and Portainer.

## Prerequisites

- Docker installed on your server
- Portainer running and accessible
- Git installed (to clone the repository)

## Files Created

- `Dockerfile` - Multi-stage Docker build for production
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Files to exclude from Docker build

## Deployment Options

### Option 1: Deploy Using Portainer Stacks (Recommended)

1. **Access Portainer Web UI**
   - Navigate to your Portainer instance (e.g., `http://your-server:9000`)
   - Login with your credentials

2. **Create a New Stack**
   - Go to **Stacks** in the left sidebar
   - Click **+ Add stack**
   - Name: `personal-portfolio`

3. **Upload Repository**
   - Choose **Git Repository** as the build method
   - Repository URL: `https://github.com/sumrendra/personal-portfolio`
   - Reference: `main` (or your branch name)
   - Compose path: `docker-compose.yml`

4. **Set Environment Variables (Optional)**
   - Add environment variables if needed:
     ```
     RESEND_API_KEY=your_api_key_here
     CONTACT_EMAIL=your-email@example.com
     RESEND_FROM_EMAIL=noreply@yourdomain.com
     ```

5. **Deploy the Stack**
   - Click **Deploy the stack**
   - Wait for the build to complete (may take 5-10 minutes)

6. **Access Your Portfolio**
   - Open browser: `http://your-server-ip:3007`

### Option 2: Deploy Using Docker Command Line

1. **Clone the repository on your server:**
   ```bash
   cd /path/to/your/projects
   git clone https://github.com/sumrendra/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d --build
   ```

3. **Check container status:**
   ```bash
   docker-compose ps
   ```

4. **View logs:**
   ```bash
   docker-compose logs -f portfolio
   ```

### Option 3: Build and Push to Registry (Advanced)

1. **Build the image:**
   ```bash
   docker build -t personal-portfolio:latest .
   ```

2. **Tag for your registry:**
   ```bash
   docker tag personal-portfolio:latest your-registry/personal-portfolio:latest
   ```

3. **Push to registry:**
   ```bash
   docker push your-registry/personal-portfolio:latest
   ```

4. **Deploy from Portainer:**
   - Use the image: `your-registry/personal-portfolio:latest`

## Configuration

### Port Mapping

Default port mapping: `3007:3000` (external:internal)

The application runs on port 3000 inside the container, but is exposed on port 3007 on your server.

To change the external port, edit `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # Access on port 8080
```

### Environment Variables

Uncomment and set in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - RESEND_API_KEY=${RESEND_API_KEY}
  - CONTACT_EMAIL=${CONTACT_EMAIL}
  - RESEND_FROM_EMAIL=${RESEND_FROM_EMAIL}
```

Or set them in Portainer UI when creating the stack.

### Custom Domain with Reverse Proxy

If using Nginx Proxy Manager or Traefik:

#### Nginx Proxy Manager:
1. Add new Proxy Host
2. Domain Names: `portfolio.yourdomain.com`
3. Forward Hostname/IP: `personal-portfolio` (container name)
4. Forward Port: `3000`
5. Enable SSL with Let's Encrypt

#### Traefik Labels (add to docker-compose.yml):
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.portfolio.rule=Host(`portfolio.yourdomain.com`)"
  - "traefik.http.routers.portfolio.entrypoints=websecure"
  - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
  - "traefik.http.services.portfolio.loadbalancer.server.port=3000"
```

## Docker Image Details

### Multi-Stage Build

The Dockerfile uses a 3-stage build process:

1. **deps** - Install dependencies
2. **builder** - Build the Next.js application
3. **runner** - Minimal production image

Final image size: ~150-200MB (optimized)

### Image Features

- Based on `node:20-alpine` (lightweight)
- Runs as non-root user (`nextjs:nodejs`)
- Next.js standalone output for smaller image
- Health check included
- Auto-restart on failure

## Monitoring & Maintenance

### View Logs in Portainer

1. Go to **Containers**
2. Click on `personal-portfolio`
3. Click **Logs**
4. Toggle **Auto-refresh logs**

### Health Check

The container includes a health check that pings `localhost:3000` every 30 seconds.

View health status:
```bash
docker inspect personal-portfolio | grep -A 10 Health
```

### Update Deployment

#### Using Portainer:
1. Go to **Stacks**
2. Select `personal-portfolio`
3. Click **Pull and redeploy**
4. Or click **Editor** to modify and redeploy

#### Using CLI:
```bash
cd /path/to/personal-portfolio
git pull origin main
docker-compose up -d --build
```

### Automatic Updates with Watchtower

The compose file includes Watchtower label. If you have Watchtower running:

```yaml
labels:
  - "com.centurylinklabs.watchtower.enable=true"
```

Watchtower will automatically update the container when a new image is available.

## Troubleshooting

### Container Won't Start

Check logs:
```bash
docker-compose logs portfolio
```

Common issues:
- Port 3000 already in use
- Insufficient memory (increase Docker memory limit)
- Build errors (check Node.js version)

### Build Fails

1. Clear Docker cache:
   ```bash
   docker-compose build --no-cache
   ```

2. Check disk space:
   ```bash
   df -h
   ```

3. Increase Docker build memory in Docker settings

### Cannot Access on Port 3007

1. Check firewall rules:
   ```bash
   sudo ufw status
   sudo ufw allow 3007/tcp
   ```

2. Check container is running:
   ```bash
   docker ps | grep portfolio
   ```

3. Check port binding:
   ```bash
   docker port personal-portfolio
   ```

### Environment Variables Not Working

- Set them in Portainer Stack editor
- Or create `.env` file in project root
- Restart container after changes

## Performance Optimization

### Resource Limits

Add to `docker-compose.yml`:

```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 1G
    reservations:
      cpus: '0.5'
      memory: 512M
```

### Enable Swap (if needed)

```yaml
deploy:
  resources:
    limits:
      memory: 1G
    reservations:
      memory: 512M
mem_swappiness: 0
```

## Security Best Practices

1. **Use Environment Variables** for sensitive data
2. **Update regularly** to get security patches
3. **Enable health checks** (already included)
4. **Run as non-root user** (already configured)
5. **Use reverse proxy** with SSL for production
6. **Restrict network access** if not public-facing

## Backup

### Backup Configuration

```bash
# Backup compose file
cp docker-compose.yml docker-compose.yml.backup

# Backup environment variables
cp .env .env.backup
```

### Container Data

Since this is a stateless application, no data backup needed. 
All content is in the Git repository.

## Production Checklist

- [ ] Set all environment variables
- [ ] Configure reverse proxy with SSL
- [ ] Set up automatic updates (Watchtower)
- [ ] Configure monitoring/alerts
- [ ] Test health check endpoint
- [ ] Document custom domain setup
- [ ] Set resource limits
- [ ] Enable firewall rules
- [ ] Test backup/restore process

## Support

For issues specific to:
- **Docker**: Check Docker logs and documentation
- **Portainer**: Check Portainer documentation
- **Next.js**: Check Next.js documentation
- **Application**: Create issue on GitHub repository

## Quick Commands Reference

```bash
# Start container
docker-compose up -d

# Stop container
docker-compose down

# View logs
docker-compose logs -f

# Restart container
docker-compose restart

# Rebuild and restart
docker-compose up -d --build

# Remove everything (including volumes)
docker-compose down -v

# Check status
docker-compose ps

# Execute command in container
docker-compose exec portfolio sh
```

---

**Last Updated**: January 2025
**Next.js Version**: 15.x
**Node Version**: 20.x
