import Branding from '@/components/branding'
import { IHackathon } from '@/utils/Interfaces'
import { getHackathon } from '@/utils/Services'
import { Image } from '@mantine/core'
import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react'

export default function Hackathon() {
  
  const router = useRouter();
  const { slug } = router.query;

  const [hackathon, setHackathon] = useState<IHackathon>({
    id: 1,
    title: 'The Ultimate hackathon',
    description: 'this brings together the best of the best',
    header_img  : 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    applicationCloseDate : new Date("2023-05-09T20:09:36.674Z"),
    applicationOpenDate : new Date("2023-05-09T20:09:36.674Z"),
    hackathonEndDate : new Date("2023-05-09T20:09:36.674Z"),  
    hackathonStartDate : new Date("2023-05-09T20:09:36.674Z"),
    partcipantLimit : 10,
    tagline : 'The Ultimate hackathon',
    additionalDetails : 'The Ultimate hackathon',
    contactDetails : 'The Ultimate hackathon',
  })

  useEffect(() => {
    // fetch hackathon data from api

    slug && getHackathon(slug as string).then((res) => {
      console.log(res)
      res && setHackathon(res as IHackathon)
    })

  }, [slug])


  return (
    <div className='bg-background'>
      <div className='min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative'>
        <div className='bg-white sticky flex flex-col top-0 z-50'>
          <Branding />
        </div>
        <div>
          <div className='flex flex-col container bg-white mt-16 rounded-xl'>
            <div className='flex flex-col lg:flex-row-reverse'>

            <div className='mx-auto my-5 '>
              <Image
                src={hackathon.header_img}
                height='250'
                width='512'
                alt='Norway'
                radius='md'
              />
            </div>
            <div className='m-4 md:m-5 md:w-1/2'>
                <h1 className='text-4xl font-bold md:my-3'>
                    {hackathon.title}
                </h1>
                <h3 className='text-lg font-medium text-gray-800'>
                    {hackathon.tagline}
                </h3>
                <div className='grid md:grid-cols-2 gap-2 my-5'>
                    <div>
                        Dates: {hackathon.hackathonStartDate.toDateString()} - {hackathon.hackathonEndDate.toDateString()}
                    </div>
                    <div>
                    Applications close on: {hackathon.applicationCloseDate.toDateString()}
                    </div>
                    <div>
                        Number of Teams:{hackathon.partcipantLimit}
                    </div>
                </div>
            <button className='btn mx-1 text-xl font-semibold bg-orange-500 w-min text-white py-2 px-5 rounded-lg'>
                Register
            </button>
            </div>
            </div>
            <div className='mx-3 my-5 md:my-7'>
                {hackathon.description}
                {parse(hackathon.additionalDetails)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
