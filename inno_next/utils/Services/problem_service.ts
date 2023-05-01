import { toast } from "react-toastify";
import { IProblem, IStrapiServerData } from "../../utils/Interfaces/coreEntity";
import { axhttp } from "./axios_setup";

const responseHandler = (response:any) => {
    
    if(response && response.data){
        return response.data
    }
    toast.error("Something went wrong")
}


// export const createProblem = async (problem:IProblem):Promise<IProblem> => {
//     return responseHandler(await axhttp.post('/problems/', {
//         data : problem
//     }))
// }

// export const getProblem = async (problemId:string):Promise<IProblem> => {
//     return responseHandler(await axhttp.get(`/problems/${problemId}`))
// }

// export const updateProblem = async (problem:IProblem):Promise<IProblem> => {
//     return responseHandler(await axhttp.put(`/problems/${problem.id}`, problem))
// }

// export const deleteProblem = async (problemId:string):Promise<any> => {
//     return responseHandler(await axhttp.delete(`/problems/${problemId}`))
// }

export const getAllProblems = async ():Promise<IProblem[]> => {
    const res = responseHandler(await axhttp.get('/problems/') as IStrapiServerData[])
    console.log(res)
    return res.map((problem:IStrapiServerData) => {
        problem.attributes.id = problem.id
        return problem.attributes as IProblem
    })

}



