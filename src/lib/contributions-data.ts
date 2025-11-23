export interface Contribution {
  id: string
  sibling: string
  amount: number
  type: string
  date: string
  status: "completed" | "pending" | "approved"
}

export const contributions: Contribution[] = [
  {
    id: "1",
    sibling: "Jhon Erwin",
    amount: 2100,
    type: "Monthly Support",
    date: "2025-06-21",
    status: "completed",
  },
  {
    id: "2",
    sibling: "ROQUE",
    amount: 500,
    type: "Monthly Support",
    date: "2025-07-01",
    status: "completed",
  },
  {
    id: "3",
    sibling: "Maria Lourdes",
    amount: 1015,
    type: "Monthly Support",
    date: "2025-07-04",
    status: "completed",
  },
  {
    id: "4",
    sibling: "Remedios",
    amount: 3050,
    type: "Monthly Support",
    date: "2025-07-30",
    status: "completed",
  },
  {
    id: "5",
    sibling: "Maria Lourdes",
    amount: 1020,
    type: "Monthly Support",
    date: "2025-08-01",
    status: "completed",
  },
  {
    id: "6",
    sibling: "Maria Lourdes",
    amount: 1520,
    type: "Insurance",
    date: "2025-10-16",
    status: "completed",
  },
  {
    id: "7",
    sibling: "Remedios",
    amount: 4080,
    type: "Monthly Support",
    date: "2025-10-26",
    status: "completed",
  },
  {
    id: "8",
    sibling: "Remedios",
    amount: 4080,
    type: "Monthly Support",
    date: "2025-10-26",
    status: "completed",
  },
  {
    id: "9",
    sibling: "Maria Lourdes",
    amount: 1015,
    type: "Monthly Support",
    date: "2025-11-09",
    status: "completed",
  },
  {
    id: "10",
    sibling: "Maria Lourdes",
    amount: 1015,
    type: "Monthly Support",
    date: "2025-11-09",
    status: "completed",
  },
  {
    id: "11",
    sibling: "Maria Lourdes",
    amount: 1200,
    type: "Monthly Support",
    date: "2025-11-22",
    status: "completed",
  }
]

export const siblings = ["Renante", "Maribel", "Roque", "Conception","Remedios","Maria Rita","John Carlo","Jhon Erwin","Maria Lourdes","Jhon Francis"]

export function getSiblingContributions(sibling: string) {
  return contributions.filter((c) => c.sibling.toLowerCase() === sibling.toLowerCase())
}

export function getTotalContribution(sibling: string) {
  return getSiblingContributions(sibling).reduce((sum, c) => sum + c.amount, 0)
}

export function getAverageContribution(sibling: string) {
  const siblingContribs = getSiblingContributions(sibling)
  return siblingContribs.length > 0 ? getTotalContribution(sibling) / siblingContribs.length : 0
}
