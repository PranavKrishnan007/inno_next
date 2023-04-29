export interface IInnovation {
    innocationId?: string
    title: string
    description: string
    header_img: string
    tags?: number[]
    badges?: string[]
    status: string
    createdBy?: string
}

export interface IProblem {
    problemId: string
    title: string
    description: string
    headerImage: string
    tags: string[]
    badges: string[]
    status: string
    createdBy?: string
    innovations?: IInnovation[]
}

export interface IHackathon {
    hackathonId: string
    title: string
    description: string
    headerImage: string
    tags: string[]
    badges: string[]
    status: string
    createdBy?: string
}

