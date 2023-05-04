export enum role {
  STUDENT = 1,
  ORGANISATION = 2,
}
export interface IUser {
  phone: string
  email: string
  password: string
  location: string
  avatar?: string
  role?: role
  username: string
  genericuser?: IGenericUser
  organisation?: IOrganisation
}

export interface IGenericUser {
  firstname: string
  lastname: string
  gender: string
  dob: string
  areaOfInterest: string
  graduationDocument?: string
  profession: string
}

export interface IOrganisation {
  organisationName: string
  letterOfIntent?: any
}
