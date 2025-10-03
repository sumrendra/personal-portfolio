export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          Sumrendra Singh
        </h1>
        <p className="text-xl text-muted-foreground">
          Full-Stack Software Engineer
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <div className="h-12 w-12 rounded-full bg-primary/10 animate-pulse" />
          <div className="h-12 w-12 rounded-full bg-secondary/10 animate-pulse delay-100" />
          <div className="h-12 w-12 rounded-full bg-accent/10 animate-pulse delay-200" />
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          🚀 Portfolio website coming soon...
        </p>
        <p className="text-xs text-muted-foreground">
          Phase 1: Foundation & Setup ✅
        </p>
      </div>
    </main>
  );
}
