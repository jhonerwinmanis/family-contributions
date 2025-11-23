import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { contributions, siblings } from "../lib/contributions-data"

export function OverviewCards() {
  const totalContributions = contributions.reduce((sum, c) => sum + c.amount, 0)
  const activeContributors = new Set(contributions.map((c) => c.sibling)).size
  const averagePerSibling = activeContributors > 0 ? totalContributions / activeContributors : 0

  // Find highest contributor
  const siblingTotals = siblings.map((sibling) => ({
    sibling,
    total: contributions.filter((c) => c.sibling === sibling).reduce((sum, c) => sum + c.amount, 0),
  }))
  const highestContributor = siblingTotals.reduce((max, curr) => (curr.total > max.total ? curr : max))

  const stats = [
    {
      title: "Total Contributions",
      value: `$${totalContributions.toLocaleString()}`,
      change: `From ${activeContributors} siblings`,
      icon: "💰",
    },
    {
      title: "Active Contributors",
      value: activeContributors.toString(),
      change: "Siblings",
      icon: "👥",
    },
    {
      title: "Average per Sibling",
      value: `$${averagePerSibling.toFixed(0)}`,
      change: "This year",
      icon: "📊",
    },
    {
      title: "Highest Contributor",
      value: highestContributor.sibling,
      change: `$${highestContributor.total.toLocaleString()} contributed`,
      icon: "⭐",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <span className="text-2xl">{stat.icon}</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
