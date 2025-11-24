export interface Contribution {
  id: string
  sibling: string
  amount: number
  type: "Monthly Support"
  date: string
  status: "completed" | "pending" | "approved"
  note:string
}

export const contributions: Contribution[] = [
  {
    id: "1",
    sibling: "Jhon Erwin",
    amount: 2100,
    type: "Monthly Support",
    date: "2025-06-21",
    status: "completed",
    note:"",
  },
  {
    id: "2",
    sibling: "ROQUE",
    amount: 500,
    type: "Monthly Support",
    date: "2025-07-01",
    status: "completed",
    note:"",
  },
  {
    id: "3",
    sibling: "Maria Lourdes",
    amount: 1015,
    type: "Monthly Support",
    date: "2025-07-04",
    status: "completed",
    note:"",
  },
  {
    id: "4",
    sibling: "Remedios",
    amount: 3050,
    type: "Monthly Support",
    date: "2025-07-30",
    status: "completed",
    note:"",
  },
  {
    id: "5",
    sibling: "Maria Lourdes",
    amount: 1020,
    type: "Monthly Support",
    date: "2025-08-01",
    status: "completed",
    note:"",
  },
  {
    id: "6",
    sibling: "Maria Lourdes",
    amount: 1520,
    type: "Monthly Support",
    date: "2025-10-16",
    status: "completed",
    note:"",
  },
  {
    id: "7",
    sibling: "Remedios",
    amount: 4080,
    type: "Monthly Support",
    date: "2025-10-26",
    status: "completed",
    note:"",
  },
  {
    id: "10",
    sibling: "Maria Lourdes",
    amount: 1015,
    type: "Monthly Support",
    date: "2025-11-09",
    status: "completed",
    note:"",
  },
  {
    id: "11",
    sibling: "Remedios",
    amount: 1200,
    type: "Monthly Support",
    date: "2025-11-22",
    status: "completed",
    note:"",
  },
  {
    id: "12",
    sibling: "Remedios",
    amount: 2500,
    type: "Monthly Support",
    date: "2025-10-26",
    status: "completed",
    note: "1 sack of rice"
  },
  {
    id: "13",
    sibling: "Remedios",
    amount: 2500,
    type: "Monthly Support",
    date: "2025-10-27",
    status: "completed",
    note: ""
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
