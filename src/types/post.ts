export type MediaType = "image" | "video";

export interface FullPost extends Post {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  content: string
  visible: boolean
  created_at: string
  post_comments: PostComment[]
  post_likes: PostLike[]
  post_shares: PostShare[]
  post_media: PostMedia[]
}

export interface Post {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  content: string
  visible: boolean
  created_at: string
}

export interface PostComment {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  post_id: number
  content: string
  created_at: string
}

export interface PostLike {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  post_id: number
  created_at: string
}

export interface PostMedia {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  post_id: number
  media_url: string
  media_type: MediaType
  created_at: string
}

export interface PostShare {
  id: number
  owner_id: number
  owner_type: "user" | "company"
  post_id: number
  created_at: string
}
