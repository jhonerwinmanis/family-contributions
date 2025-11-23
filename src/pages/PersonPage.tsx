import { useParams, useNavigate } from "react-router-dom"
import { PersonHeader } from "@/components/person-header"
import { PersonOverview } from "@/components/person-overview"
import { PersonContributionsTable } from "@/components/person-contributions-table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function PersonPage() {
  const { name } = useParams<{ name: string }>()
  const navigate = useNavigate()

  if (!name) {
    return <div>Invalid person</div>
  }

  const displayName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <PersonHeader name={displayName} />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Button variant="outline" onClick={() => navigate("/")} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>
        <PersonOverview name={displayName} />
        <PersonContributionsTable name={displayName} />
      </div>
    </main>
  )
}
