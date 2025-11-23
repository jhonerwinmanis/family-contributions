import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getTotalContribution, getAverageContribution, getSiblingContributions } from "@/lib/contributions-data"

interface PersonOverviewProps {
  name: string
}

export function PersonOverview({ name }: PersonOverviewProps) {
  const total = getTotalContribution(name)
  const average = getAverageContribution(name)
  const count = getSiblingContributions(name).length

  const stats = [
    {
      title: "Total Contribution",
      value: `$${total.toLocaleString()}`,
      icon: "💰",
    },
    {
      title: "Number of Contributions",
      value: count.toString(),
      icon: "📝",
    },
    {
      title: "Average per Contribution",
      value: `$${average.toLocaleString()}`,
      icon: "📊",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <span className="text-2xl">{stat.icon}</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
