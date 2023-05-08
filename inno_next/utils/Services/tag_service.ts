import { ITags, IStrapiServerData } from '../../utils/Interfaces/coreEntity'
import { axhttp } from './axios_setup'

export const getAllTags = async (): Promise<ITags[]> => {
  const tags: IStrapiServerData[] = await axhttp.get('/tags/').then((res) => res.data)
  if (!tags) return []
  const formattedTags: ITags[] = tags.map((tag: IStrapiServerData) => {
    return {
      id: tag.id,
      title: tag.attributes.title,
    }
  })
  return formattedTags
}

export const addTag = async (name: string): Promise<ITags> => {
  const tag: IStrapiServerData = await axhttp
    .post('/tags/', {
      data: {
        title: name,
      },
    })
    .then((res) => res.data)
  return {
    id: tag.id,
    title: tag.attributes.title,
  }
}
