export interface IInnovation {
    innocationId?: string
    title: string
    description: string
    header_img: string
    tags?: number[] | string[] 
    badges?: string[]
    status: string
    createdBy?: string
}

export interface IProblem {
    id?: string
    title: string
    description: string
    header_img: string
    tags: number[] | string[]
    badges: string[]
    status: string
    createdBy?: string
    innovations?: IInnovation[]
}

export interface IHackathon {
    id: string
    title: string
    tagline : string
    about: string
    header_img: string
    partcipantLimit: number
    applicationOpenDate: Date
    applicationCloseDate: Date
    hackathonStartDate: Date
    hackathonEndDate: Date
    contactDetails: string
    additionalDetails: string
    tags:number[] | string[]
    badges: string[] | number[]
    participants: string[],
    accepted?: boolean,
    enduser? : number
}

