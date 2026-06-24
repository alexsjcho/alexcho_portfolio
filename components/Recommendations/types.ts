export type RelationshipType = 'Manager' | 'Peer'

export interface Recommendation {
  id: string
  name: string
  title: string
  company: string
  relationship: RelationshipType
  linkedinUrl: string
  profileImage?: string
  text: string
  date?: string
}
