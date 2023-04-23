export interface IUser {
    phone: string
    email: string
    password: string
    location: string
    avatar?: string
    role?: string
  }
  
  export interface IStudent {
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