import React from 'react'
import { Badge, Button, Card, Group, Image } from '@mantine/core'
import { IconArrowRight, IconEdit } from '@tabler/icons-react'
import { IHackathon } from '@/utils/Interfaces/coreEntity'
import { TagDisplayer } from '../tagDisplayer'
import { useRouter } from 'next/navigation'

export default function HackathonCard(hackathon: IHackathon) {
  const router = useRouter()
  
  return (
    <div>
      <Card className='flex gap-2' shadow='sm' padding='lg' radius='md' withBorder>
        <div className='min-w-max my-auto'>
          <Image
            src={hackathon.header_img}
            height='160'
            alt='Norway'
            radius='md'
          />
        </div>
        <div className='ml-10'>
          <Group position='apart' mt='md' mb='xs'>
            <div className='flex flex-row justify-start space-x-2 items-center'>
              <div className='font-bold text-2xl line-clamp-1'>{hackathon.title}</div>
              <IconEdit className='hover:bg-slate-200 m-1 cursor-pointer hover:shadow-lg active:shadow-none'/>
            </div>
            <Badge className='text-lg p-3'>
              {hackathon.participants.data.length} <span className='text-base'>Registrations</span>
            </Badge>
          </Group>
          <div className='text-lg my-1 text-slate-600'>{hackathon.tagline}</div>
          <div className='max-w-full text-md text-gray-600 line-clamp-3'>{hackathon.description}</div>
          <div className=' flex justify-start items-center'>
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
          </div>
        </div>
      </Card>
    </div>
  )
}
