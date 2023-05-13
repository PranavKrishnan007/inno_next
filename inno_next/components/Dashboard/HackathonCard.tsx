import React from 'react'
import { Badge, Button, Card, Group, Image } from '@mantine/core'
import { IconArrowRight, IconEdit } from '@tabler/icons-react'
import { IHackathon } from '@/utils/Interfaces/coreEntity'
import { TagDisplayer } from '../tagDisplayer'
import { usePathname, useRouter } from 'next/navigation'

export default function HackathonCard(hackathon: IHackathon) {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div>
      <Card className='flex flex-col items-center md:flex-row  border-b gap-1 shadow-lg my-4 hover:bg-slate-100' >
        <div className='max-w-1/4 min-w-max my-auto'>
          <Image
            src={hackathon.header_img}
            height='160'
            width='180'
            alt='Norway'
            radius='md'
          />
        </div>
        <div className='md:w-full'>
          <Group className="justify-between flex-col md:flex-row" mt='md' mb='xs'>
            <div className='flex flex-row justify-start space-x-2 items-center'>
              <div className='font-bold text-2xl line-clamp-1'>{hackathon.title}</div>
              <IconEdit className='hover:bg-slate-200 m-1 cursor-pointer hover:shadow-lg active:shadow-none' />
            </div>
            <div className='flex flex-row gap-2'>
              <Badge className='text-lg p-3'>
                {hackathon.participants && hackathon.participants.data.length} <span className='text-base'>Registrations</span>
              </Badge>
              {
                pathName === '/dashboard' && (
                  <Badge className='text-lg p-3 bg-green-100'>
                    {hackathon.accepted ? (<span className='text-base'>ACCEPTED</span>) : (<span className='text-red'>PENDING</span>)}
                  </Badge>
                )
              }
            </div>
          </Group>
          <div className='text-lg w-4/5 text-justify mx-auto md:w-full my-1 text-slate-600'>{hackathon.tagline}</div>
          <div className='w-4/5 text-justify mx-auto md:w-full text-md text-gray-600 line-clamp-3'>{hackathon.description}</div>
          <div className='flex flex-col md:flex-row justify-start items-center'>
            <Button
              variant='light'
              color='blue'
              mt='md'
              radius='md'
              className='bg-blue-100 hover:bg-blue-200 my-4 md:mr-5'
              onClick={() => router.push(`/hackathon/${hackathon.id}`)}
            >
              More Info <IconArrowRight />
            </Button>
            <TagDisplayer tags={hackathon.tags} ></TagDisplayer>
            <div>

            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
