import { toast } from "react-toastify";
import { IInnovation } from "../Interfaces/coreEntity";
import { axhttp } from "./axios_setup";


const responseHandler = (response:any) => {
    
    if(response && response.data){
        return response.data
    }
    toast.error("Something went wrong")
}


export const createInnovation = async (innovation:IInnovation):Promise<IInnovation> => {
    return responseHandler(await axhttp.post('/innovations/', {
        data : innovation
    }))
}

export const getInnovation = async (innovationId:string):Promise<IInnovation> => {
    return responseHandler(await axhttp.get(`/innovations/${innovationId}`))
}

export const updateInnovation = async (innovation:IInnovation):Promise<IInnovation> => {
    return responseHandler(await axhttp.put(`/innovations/${innovation.innocationId}`, innovation))
}

export const deleteInnovation = async (innovationId:string):Promise<any> => {
    return responseHandler(await axhttp.delete(`/innovations/${innovationId}`))
}

export const getAllInnovations = async ():Promise<IInnovation[]> => {
    return responseHandler(await axhttp.get('/innovations/'))
}

