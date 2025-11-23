interface PersonHeaderProps {
  name: string
}

export function PersonHeader({ name }: PersonHeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{name}'s Contributions</h1>
            <p className="text-muted-foreground mt-1">View detailed contribution history</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Personal Dashboard</p>
            <p className="text-lg font-semibold text-foreground">2024 Overview</p>
          </div>
        </div>
      </div>
    </header>
  )
}
