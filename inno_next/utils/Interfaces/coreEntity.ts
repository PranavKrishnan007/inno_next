export interface IStrapiServerData {
    id: number
    attributes: IInnovation | IProblem | IHackathon;
}

export interface IInnovation {
    id? : number
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
    id? : number
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
    id? : number
    title: string
    tagline : string
    description: string
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

