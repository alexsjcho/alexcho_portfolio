export interface HobbyImage {
  id: number
  src: string
  alt: string
}

export interface MediaLink {
  label: string
  url: string
}

export interface Hobby {
  id: string
  title: string
  description: string
  images: HobbyImage[]
  mediaLinks?: MediaLink[]
}
