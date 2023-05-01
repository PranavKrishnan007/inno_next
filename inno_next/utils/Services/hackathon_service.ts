import { toast } from "react-toastify";
import { IHackathon, IStrapiServerData } from "../../utils/Interfaces/coreEntity";
import { axhttp } from "./axios_setup";


const responseHandler = (response:any) => {
    
    if(response && response.data){
        return response.data as IStrapiServerData[]
    }
    toast.error("Something went wrong")
}


// const createHackathon = async (hackathon:IHackathon):Promise<IHackathon> => {
//     return responseHandler(await axhttp.post('/hackathons/', {
//         data : hackathon
//     }))
// }

// const getHackathon = async (hackathonId:string):Promise<IHackathon> => {
//     return responseHandler(await axhttp.get(`/hackathons/${hackathonId}`))
// }

// const updateHackathon = async (hackathon:IHackathon):Promise<IHackathon> => {
//     return responseHandler(await axhttp.put(`/hackathons/${hackathon.id}`, hackathon))
// }


// const deleteHackathon = async (hackathonId:string):Promise<any> => {
//     return responseHandler(await axhttp.delete(`/hackathons/${hackathonId}`))
// }


export const getAllHackathons = async ():Promise<IHackathon[]> => {
    const res = responseHandler(await axhttp.get('/hackathons/')) as IStrapiServerData[]
    return res.map((hackathon:IStrapiServerData) => {
        hackathon.attributes.id = hackathon.id
        return hackathon.attributes as IHackathon
    })
}

