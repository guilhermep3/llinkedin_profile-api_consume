export interface Company {
  id: number
  name: string
  username: string
  email: string
  password: string
  phone ?: string | null
  country ?: string | null
  state ?: string | null
  city ?: string | null
  industry: string
  bio ?: string | null
  about ?: string | null
  website ?: string | null
  avatar: string
  cover: string
  presentation_video_url?: string | null
  size: string
  type: string
  verified: boolean
  created_at: string
}