import { toast } from "react-toastify";
import { IProblem } from "../Interfaces/coreEntity";
import { axhttp } from "./axios_setup";


const responseHandler = (response:any) => {
    
    if(response && response.data){
        return response.data
    }
    toast.error("Something went wrong")
}


export const createProblem = async (problem:IProblem):Promise<IProblem> => {
    return responseHandler(await axhttp.post('/problems/', {
        data : problem
    }))
}

export const getProblem = async (problemId:string):Promise<IProblem> => {
    return responseHandler(await axhttp.get(`/problems/${problemId}`))
}

export const updateProblem = async (problem:IProblem):Promise<IProblem> => {
    return responseHandler(await axhttp.put(`/problems/${problem.problemId}`, problem))
}

export const deleteProblem = async (problemId:string):Promise<any> => {
    return responseHandler(await axhttp.delete(`/problems/${problemId}`))
}

export const getAllProblems = async ():Promise<IProblem[]> => {
    return responseHandler(await axhttp.get('/problems/'))
}



