import React from 'react'
import { Avatar, Badge, Button, Card, Group, Image, Tabs, Textarea, TextInput } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { IInnovation } from '@/utils/Interfaces/coreEntity'
import { TagDisplayer } from '../tagDisplayer'
import { useRouter } from 'next/navigation'

export default function InnovationCard(innovation: IInnovation) {
  const {push} = useRouter();
  return (
    <div>
      <Card className='flex gap-2' shadow='sm' padding='lg' radius='md' withBorder>
        <div className='max-w-1/4  min-w-max my-auto'>
          <Image
            src={innovation.header_img}
            height='160'
            width='180'
            alt='Norway'
            radius='md'
          />
        </div>
        <div className='ml-10 min-w-4/6'>
          <Group position='apart' mt='md' mb='xs'>
            <div className='font-bold text-2xl'>{innovation.title}</div>
            <Badge className='text-lg p-3'>
              12 <span className='text-base'>Upvotes</span>
            </Badge>
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
