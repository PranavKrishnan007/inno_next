import React from 'react'
import { Avatar, Badge, Button, Card, Group, Image, Tabs, Textarea, TextInput } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { IProblem } from '@/utils/Interfaces/coreEntity'

export default function ProblemCard(problem: IProblem) {
  return (
    <div >
      <Card className='flex border-b gap-1'  padding='sm'  >
        <div className='min-w-max my-auto px-2'>
          <Image
            src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            // src={problem.src}
            height='160'
            width='160'
            alt='Norway'
            radius='sm'
          />
        </div>
        <div className="">
          <Group position='apart' mt='md' mb='xs'>
            <div className='w-4/6 font-extrabold text-ellipsis overflow-hidden text-gray-700 text-lg line-clamp-1'>{problem.title}</div>
            <Badge className='text-lg p-3'>
              12 <span className='text-base'>Upvotes</span>
            </Badge>
          </Group>
          <div className='min-w-full text-ellipsis  overflow-hidden text-md text-gray-500 tracking-wide line-clamp-3'>{problem.description}</div>
          <div className=' flex justify-start items-center'>
            <Button
              variant='outline'
              mt='md'
              radius='sm'
              className=' hover:bg-blue-500 transition  ease-in-out hover:text-white my-4 md:mr-5'
            >
              <span className="">Go to Challenge</span>
              <IconArrowRight />
            </Button>
            <div className='flex gap-2 mt-2 md:ml-4'>
              <Badge color='orange' variant='light'>
                tag1
              </Badge>
              <Badge color='red' variant='light'>
                tag2
              </Badge>
              <Badge color='orange' variant='light'>
                tag3
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
