import React from 'react'
import { Avatar, Badge, Button, Card, Group, Image, Tabs, Textarea, TextInput } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { IProblem } from '@/utils/Interfaces/coreEntity'

export default function ProblemCard(problem: IProblem) {
  return (
    <div>
      <Card className='flex gap-2' shadow='sm' padding='lg' radius='md' withBorder>
        <div className='min-w-max my-auto'>
          <Image
            src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            // src={problem.src}
            height='160'
            width='160'
            alt='Norway'
            radius='md'
          />
        </div>
        <div className='ml-10'>
          <Group position='apart' mt='md' mb='xs'>
            <div className='font-bold text-2xl'>{problem.title}</div>
            <Badge className='text-lg p-3'>
              12 <span className='text-base'>Upvotes</span>
            </Badge>
          </Group>
          <div className='max-w-full text-md text-gray-600 line-clamp-3'>{problem.description}</div>
          <div className=' flex justify-start items-center'>
            <Button
              variant='light'
              color='blue'
              mt='md'
              radius='md'
              className='bg-blue-100 hover:bg-blue-200 my-4 md:mr-5'
            >
              Go to Challenge <IconArrowRight />
            </Button>
            <div className='flex gap-2 mt-2 md:ml-4'>
              <Badge color='orange' variant='light'>
                {problem.tag1}
              </Badge>
              <Badge color='red' variant='light'>
                {problem.tag2}
              </Badge>
              <Badge color='orange' variant='light'>
                {problem.tag3}
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
