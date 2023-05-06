import { toast } from 'react-toastify'
import { IHackathon, IStrapiServerData } from '../../utils/Interfaces/coreEntity'
import { axhttp } from './axios_setup'

const responseHandler = (response: any) => {
  if (response && response.data) {
    return response.data as IStrapiServerData[]
  }
}

export const getAllHackathons = async (): Promise<IHackathon[]> => {
  const res = responseHandler(await axhttp.get('/hackathons/')) as IStrapiServerData[]
  return res.map((hackathon: IStrapiServerData) => {
    hackathon.attributes.id = hackathon.id
    return hackathon.attributes as IHackathon
  })
}
