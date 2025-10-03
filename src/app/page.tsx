export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 md:p-24">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
          Sumrendra Singh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Full-Stack Software Engineer
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Building scalable web applications with modern technologies. 
          7+ years of experience in React, Next.js, Node.js, and cloud platforms.
        </p>
        
        <div className="flex gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="h-16 w-16 rounded-full bg-primary/10 animate-pulse" />
          <div className="h-16 w-16 rounded-full bg-secondary/10 animate-pulse" style={{ animationDelay: "0.1s" }} />
          <div className="h-16 w-16 rounded-full bg-accent/10 animate-pulse" style={{ animationDelay: "0.2s" }} />
        </div>
        
        <div className="mt-12 space-y-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground">
            🚀 Portfolio website in development
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>✅ Phase 1: Foundation & Setup</span>
            <span>•</span>
            <span>✅ Phase 2: Layout & Navigation</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Next: Hero Section with 3D Graphics 🎨
          </p>
        </div>
      </div>
    </div>
  );
}
