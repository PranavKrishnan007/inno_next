import { IOrganisation, IStudent, IUser } from "@/src/Interfaces";


const studentFormValidator = (values: IStudent) => {

    const errorMessages = {
        required: "Required",
        invalidEmail: "Invalid email address",
        invalidPhone: "Invalid phone number",
        invalidPassword: "Password must be at least 8 characters long",
        invalidPasswordMatch: "Passwords do not match",
        invalidDOB: "Invalid date of birth",
        invalidGraduationDocument: "Invalid graduation document",
        invalidLetterOfIntent: "Invalid letter of intent",
    }

    const errors: any = {}


    if (!values.firstname) {
        errors.firstname = errorMessages.required
        return errors
    }

    if (!values.lastname) {
        errors.lastname = errorMessages.required
        return errors
    }

}

const organisationFormValidator = (values: IOrganisation) => {

}


export { studentFormValidator, organisationFormValidator }
