import { IOrganisation, IGenericUser, IUser } from "@/src/Interfaces";
import { toast } from "react-toastify";


const formValidator = (values: IUser | IOrganisation | IGenericUser ):boolean => {
    
    const missingFields: string[] = [];

    Object.entries(values).forEach(
        ([key, value]) => {
            if (value === null || value === undefined || value === '') {
                missingFields.push(key)
            }

        }
    );

    if (missingFields.length > 0) {
        toast.error(`Please fill in the following fields: ${missingFields.join(', ')}`)
        return false
    }

    return true
}


export { formValidator }
