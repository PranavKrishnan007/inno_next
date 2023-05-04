import { toast } from "react-toastify";
import { IInnovation, IProblem, IStrapiServerData } from "../../utils/Interfaces/coreEntity";
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
    const res = responseHandler(await axhttp.get('/innovations/') as IStrapiServerData[])
    return res.map((innovation:IStrapiServerData) => {
        innovation.attributes.id = innovation.id
        return innovation.attributes as IInnovation
    })

   
}

export const getInnovationsByUser = async (userId:string):Promise<IInnovation[]> => {
    const res = responseHandler(await axhttp.get(`/innovations?filters[user]=${userId}`) as IStrapiServerData[])
    return res.map((innovation:IStrapiServerData) => {
        innovation.attributes.id = innovation.id
        return innovation.attributes as IInnovation
    })
}

