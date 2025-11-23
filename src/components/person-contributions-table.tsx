import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSiblingContributions } from "@/lib/contributions-data"

const statusColors = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  approved: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
}

interface PersonContributionsTableProps {
  name: string
}

export function PersonContributionsTable({ name }: PersonContributionsTableProps) {
  const siblingContributions = getSiblingContributions(name)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {siblingContributions.map((contribution) => (
                <tr
                  key={contribution.id}
                  className="border-b border-border hover:bg-muted/30 transition-colors duration-150"
                >
                  <td className="py-3 px-4 text-muted-foreground">{contribution.type}</td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {new Date(contribution.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-4 text-right text-foreground font-semibold">
                    ${contribution.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        statusColors[contribution.status]
                      }`}
                    >
                      {contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
