import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { contributions } from "@/lib/contributions-data"

function generateChartData() {
  const siblingTotals: Record<string, number> = {}

  contributions.forEach((contribution) => {
    siblingTotals[contribution.sibling] = (siblingTotals[contribution.sibling] || 0) + contribution.amount
  })

  const totalAmount = Object.values(siblingTotals).reduce((sum, amount) => sum + amount, 0)

  return Object.entries(siblingTotals)
    .map(([name, amount]) => ({
      name,
      contributions: amount,
      percentage: totalAmount > 0 ? Math.round((amount / totalAmount) * 100) : 0,
    }))
    .sort((a, b) => b.contributions - a.contributions)
}

export function ContributionChart() {
  const chartData = generateChartData()

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Contributions by Sibling</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            contributions: {
              label: "Amount ($)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="contributions" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
