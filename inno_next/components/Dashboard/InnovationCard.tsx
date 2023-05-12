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
      <Card className='flex border-b gap-1 shadow-lg my-4 hover:bg-slate-100' >
        <div className='max-w-1/4  min-w-max my-auto'>
          <Image
            src={innovation.header_img}
            height='160'
            width='180'
            alt='Image'
            radius='sm'
          />

        </div>
        <div className='w-full'>
          <Group position='apart' mt='md' mb='xs'>
            <div className='font-bold text-2xl'>{innovation.title}</div>
            <Badge className='text-lg p-3'>
              12 <span className='text-base'>Upvotes</span>
            </Badge>
            {
              pathName === '/dashboard' && (
                <Badge className='text-lg p-3 bg-green-100'>
              {innovation.status &&  (<span className='text-base'>{innovation.status}</span>)}
            </Badge>)
            }

          </Group>
          <div className='max-w-full text-md text-gray-600 line-clamp-3'>{innovation.description}</div>
          <div className=' flex justify-start items-center'>
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
