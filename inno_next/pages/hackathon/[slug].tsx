import Branding from '@/components/branding'
import { IHackathon } from '@/utils/Interfaces'
import { entities, getHackathon, registerForHackathon } from '@/utils/Services'
import { Image } from '@mantine/core'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useAuth } from '@/utils/auth'
import { IStrapiServerData } from '@/utils/Interfaces/coreEntity'
import { toast } from 'react-toastify'
import CommentCard from '@/components/commentSection'
import {IconAlertTriangle} from "@tabler/icons-react";

export default function Hackathon() {
  const router = useRouter()
  const { slug } = router.query
  const { user } = useAuth() as any

  const [hackathon, setHackathon] = useState<IHackathon>({
    id: 1,
    title: 'The Ultimate hackathon',
    description: 'this brings together the best of the best',
    header_img:
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    applicationCloseDate: new Date('2023-05-09T20:09:36.674Z'),
    applicationOpenDate: new Date('2023-05-09T20:09:36.674Z'),
    hackathonEndDate: new Date('2023-05-09T20:09:36.674Z'),
    hackathonStartDate: new Date('2023-05-09T20:09:36.674Z'),
    partcipantLimit: 10,
    tagline: 'The Ultimate hackathon',
    additionalDetails: 'The Ultimate hackathon',
    contactDetails: 'The Ultimate hackathon',
  })

  const [isRegister, setIsRegister] = useState(false)
  useEffect(() => {
    slug &&
    getHackathon(slug as string).then((res) => {
      if (!res?.participants) return
      res.participants.data.find((participant: IStrapiServerData) => {
        if (participant.id == user.id) {
          setIsRegister(true)
        }
      })
      res && setHackathon(res as IHackathon)
    })
  }, [slug])

  const register = () => {
    registerForHackathon(hackathon.id + '', user.id).then((res: IStrapiServerData) => {
      toast.success('Successfully registered for hackathon')
      setIsRegister(true)
    })
  }

  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="bg-white sticky flex flex-col top-0 z-50">
          <Branding />
        </div>
      </div>
      {hackathon ?
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className='min-h-screen border mt-10 rounded-2xl container mx-auto px-4 md:px-8 md:py-10 relative'>
            <div className="rounded-xl h-52 px-10 text-left text-5xl text-white">
              <img src={hackathon.header_img} alt="problem_image" className="outline outline-gray-700/30 h-full w-full object-cover rounded-xl" />
            </div>
            <div className="w-full text-center pt-10 font-semibold tracking-wider text-5xl">
              {hackathon.title}
            </div>
            <h3 className='px-10 py-5 text-lg text-center font-medium text-gray-800'>{hackathon.tagline}</h3>
            <div>
              <div className='flex flex-col container bg-white rounded-xl'>
                <div className='flex flex-col mx-10  border bg-slate-50 rounded-xl '>
                  <div className='m-5 md:m-8'>
                    <div className=''>
                      <div className="">
                      <div>
                        <p className="text-xl font-bold mb-2 text-gray-500 ">
                          Dates:
                        </p>
                        <p className="text-xl tracking-tight text-gray-700 font-bold ">
                          {/*<span className="font-bold text-blue-500 mr-2">from,</span>*/}
                          {hackathon.hackathonStartDate.toDateString()} -{' '}{hackathon.hackathonEndDate.toDateString()}
                        </p>
                      </div>
                      <div className="bg-blue-500/10 font-medium text-blue-500 my-8 p-4 rounded-xl ">
                        Applications close on: {hackathon.applicationCloseDate.toDateString()}
                      </div>
                    </div>
                      <div className="text-gray-700 font-bold my-4 ">
                        Number of Teams: {hackathon.partcipantLimit}
                      </div>
                    </div>
                    {!isRegister ? (
                        <button
                            onClick={() => register()}
                            disabled={!user}
                            className='btn  text-xl font-semibold bg-orange-500 w-min text-white py-2 px-5 rounded-lg'
                        >
                          Register
                        </button>
                    ) : (
                        <button
                            onClick={() => register()}
                            disabled={true}
                            className='btn  text-xl font-semibold w-min bg-orange-500/10 text-orange-400 py-2 px-5 rounded-lg'
                        >
                          Registered
                        </button>
                    )}
                  </div>
                </div>
                <div className='w-full tracking-normal text-lg px-10 my-7'>
                  {hackathon.description}
                  {parse(hackathon.additionalDetails)}
                </div>
              </div>
            </div>
            <CommentCard entityId={hackathon.id} entityType={entities.HACKATHON} user={user}></CommentCard>
          </div>
        </div>:
        <div className="text-4xl text-center p-10 w-full h-full font-extrabold flex flex-col justify-center items-center">
          <IconAlertTriangle
              size={48}
              strokeWidth={2}
              color={'black'}
          />
          <div>
            Problem Not Available
          </div>
        </div>}
  </div>
  )
}
