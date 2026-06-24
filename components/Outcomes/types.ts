export type OutcomeCategory =
  | 'Event-Led Demand Generation'
  | 'Brand Authority & Positioning'
  | 'Organic Traffic Growth'
  | 'Pricing Strategy'
  | 'Market Penetration'
  | 'Cost Efficiency'
  | 'Infrastructure Scaling'
  | 'Global Developer Experience'
  | 'Incident Resolution'
  | 'Operational Velocity'
  | 'Revenue Performance'
  | 'Pricing Accuracy'
  | 'Security & Fraud Prevention'
  | 'Strategic Resource Allocation'
  | 'Competitive Intelligence'

export interface OutcomeItem {
  id: string
  company: string
  companyTagline?: string
  category: OutcomeCategory
  description: string
  // Highlighted metrics will be extracted from description
}
