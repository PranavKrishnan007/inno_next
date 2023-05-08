import { toast } from 'react-toastify'
import { IProblem, IStrapiServerData } from '../../utils/Interfaces/coreEntity'
import { axhttp } from './axios_setup'

const responseHandler = (response: any) => {
  if (response && response.data) {
    return response.data
  }
  return false
}

export const getAllProblems = async (): Promise<IProblem[]> => {
  const res = responseHandler((await axhttp.get('/problems/')) as IStrapiServerData[])
  if (!res) return []
  return res.map((problem: IStrapiServerData) => {
    problem.attributes.id = problem.id
    return problem.attributes as IProblem
  })
}
// get problems by login user
export const getProblemsByUser = async (userId: string): Promise<IProblem[]> => {
  const res = responseHandler(
    (await axhttp.get(`/problems?filters[user]=${userId}`)) as IStrapiServerData[],
  )
  if (!res) return []
  return res.map((problem: IStrapiServerData) => {
    problem.attributes.id = problem.id
    return problem.attributes as IProblem
  })
}
