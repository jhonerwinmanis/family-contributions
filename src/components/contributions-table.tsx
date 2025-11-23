import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { contributions } from "@/lib/contributions-data"

const statusColors = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  approved: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
}

export function ContributionsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const filteredContributions = contributions.filter(
    (c) =>
      c.sibling.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSiblingClick = (sibling: string) => {
    navigate(`/person/${sibling.toLowerCase()}`)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>All Contributions</CardTitle>
          <Button className="bg-primary hover:bg-primary/90">Add Contribution</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search by sibling name or contribution type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Sibling</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                 <th className="text-left py-3 px-4 font-semibold text-foreground">Note</th>
              </tr>
            </thead>
            <tbody>
              {filteredContributions.map((contribution) => (
                <tr
                  key={contribution.id}
                  className="border-b border-border hover:bg-muted/30 transition-colors duration-150"
                >
                  <td className="py-3 px-4 text-foreground font-medium">
                    <button
                      onClick={() => handleSiblingClick(contribution.sibling)}
                      className="text-primary hover:underline cursor-pointer"
                    >
                      {contribution.sibling}
                    </button>
                  </td>
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
                  <td className="py-3 px-4 text-right text-foreground font-semibold">
                    {contribution.note}
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
