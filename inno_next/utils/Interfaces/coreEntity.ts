export interface IStrapiServerData {
  id: number
  attributes: IInnovation | IProblem | IHackathon
}

export interface IInnovation {
  id?: number
  innocationId?: string
  title: string
  description: string
  header_img: string
  tags?: number[] | string[]
  badges?: string[]
  status: string
  author?: string
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
  author?: string
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
  tags: number[] | string[]
  badges: string[] | number[]
  participants: string[]
  accepted?: boolean
  enduser?: number
}

export interface ITags {
  id?: number
  title?: string
  innovations?: string[] | number[] | IInnovation[]
  problems?: string[] | number[] | IProblem[]
  hackathons?: string[] | number[] | IHackathon[]
}
