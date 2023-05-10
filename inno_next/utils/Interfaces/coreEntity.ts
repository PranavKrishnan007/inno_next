export interface IStrapiServerData {
  id: number
  attributes: IInnovation | IProblem | IHackathon
}

export interface IInnovation {
  id?: number
  title: string
  description: string
  header_img?: string
  tags?: number[] | string[]
  badges?: string[]
  status?: string
  author?: number
  content: string
}

export interface IProblem {
  id?: number
  title: string
  description: string
  header_img: string
  tags: number[] | string[]
  badges?: string[]
  status?: string
  author?: number
  innovations?: IInnovation[]
  content: string
}

export interface IHackathon {
  id?: number
  title: string
  tagline: string
  description: string
  header_img: string
  partcipantLimit: number
  applicationOpenDate: Date
  applicationCloseDate: Date
  hackathonStartDate: Date
  hackathonEndDate: Date
  contactDetails: string
  additionalDetails: string
  tags?: number[] | string[]
  badges?: string[] | number[]
  participants?: any
  accepted?: boolean
  author?: any
}

export interface ITags {
  id?: number
  title?: string
  innovations?: string[] | number[] | IInnovation[]
  problems?: string[] | number[] | IProblem[]
  hackathons?: string[] | number[] | IHackathon[]
}
