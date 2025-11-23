import { DashboardHeader } from "@/components/dashboard-header"
import { OverviewCards } from "@/components/overview-cards"
import { ContributionChart } from "@/components/contribution-chart"
import { ContributionsTable } from "@/components/contributions-table"

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <OverviewCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContributionChart />
        </div>
        <ContributionsTable />
      </div>
    </main>
  )
}
