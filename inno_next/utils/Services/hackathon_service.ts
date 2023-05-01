import { toast } from "react-toastify";
import { IHackathon } from "../../utils/Interfaces/coreEntity";
import { axhttp } from "./axios_setup";


const responseHandler = (response:any) => {
    
    if(response && response.data){
        return response.data
    }
    toast.error("Something went wrong")
}


const createHackathon = async (hackathon:IHackathon):Promise<IHackathon> => {
    return responseHandler(await axhttp.post('/hackathons/', {
        data : hackathon
    }))
}

const getHackathon = async (hackathonId:string):Promise<IHackathon> => {
    return responseHandler(await axhttp.get(`/hackathons/${hackathonId}`))
}

const updateHackathon = async (hackathon:IHackathon):Promise<IHackathon> => {
    return responseHandler(await axhttp.put(`/hackathons/${hackathon.id}`, hackathon))
}


const deleteHackathon = async (hackathonId:string):Promise<any> => {
    return responseHandler(await axhttp.delete(`/hackathons/${hackathonId}`))
}


const getAllHackathons = async ():Promise<IHackathon[]> => {
    return responseHandler(await axhttp.get('/hackathons/'))
}

export const hackathonService = {
    createHackathon,
    getHackathon,
    updateHackathon,
    deleteHackathon,
    getAllHackathons
}

