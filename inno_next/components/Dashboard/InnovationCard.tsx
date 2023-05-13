import React from 'react'
import { Avatar, Badge, Button, Card, Group, Image, Tabs, Textarea, TextInput } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { IInnovation } from '@/utils/Interfaces/coreEntity'
import { TagDisplayer } from '../tagDisplayer'
import { usePathname, useRouter } from 'next/navigation'

export default function InnovationCard(innovation: IInnovation) {
  const {push} = useRouter();
  const pathName = usePathname();
  return (
    <div>
      <Card className='flex  flex-col items-center md:flex-row   border-b gap-1 shadow-lg my-4 hover:bg-slate-100' >
        <div className='max-w-1/4 px-2 my-auto'>
          <Image
            src={innovation.header_img}
            height='160'
            width='180'
            alt='Image'
            radius='sm'
          />

        </div>
        <div className='md:w-full'>
          <Group className="justify-between flex-col md:flex-row" mt='md' mb='xs'>
            <div className='font-bold text-2xl'>{innovation.title}</div>
            {
              pathName === '/dashboard' && (
                <Badge className='text-lg p-3 bg-green-100'>
              {innovation.status &&  (<span className='text-base'>{innovation.status}</span>)}
            </Badge>)
            }
          </Group>
          <div className='text-md w-4/5 text-justify mx-auto md:w-full text-gray-600 line-clamp-3'>{innovation.description}</div>
          <div className='flex flex-col md:flex-row  justify-start items-center'>
            <Button
              variant='light'
              color='blue'
              mt='md'
              radius='md'
              className='bg-blue-100 hover:bg-blue-200 my-4 md:mr-5'
              onClick={() => push(`/innovation/${innovation.id}`)}
            >
              Go to problem <IconArrowRight />
            </Button>
            <TagDisplayer tags={innovation.tags} ></TagDisplayer>
          </div>
        </div>
      </Card>
    </div>
  )
}
