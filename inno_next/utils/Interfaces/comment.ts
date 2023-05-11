export interface ICommentPayload {
  author: {
    id: number
    name: string
    email: string
    avatar: string
  }
  content: string
  threadOf?: number
}

export interface IComment {
  id: number
  content: string
  blocked: boolean
  blockedThread: boolean
  isAdminComment?: any
  removed: boolean
  approvalStatus: string
  related: string
  createdAt: string
  updatedAt: string
  gotThread: boolean
  threadFirstItemId?: number
  childer?: IComment[]
}
