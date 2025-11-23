export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manis Family Contributions</h1>
            <p className="text-muted-foreground mt-1">Track and manage the family contributions</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Dashboard</p>
            <p className="text-lg font-semibold text-foreground">2025 Overview</p>
          </div>
        </div>
      </div>
    </header>
  )
}
