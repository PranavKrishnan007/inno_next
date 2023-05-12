import React from 'react'
import {  Badge, Button, Card, Group, Image } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { IProblem } from '@/utils/Interfaces/coreEntity'
import { TagDisplayer } from '../tagDisplayer'
import { usePathname, useRouter } from 'next/navigation'


export default function ProblemCard(problem: IProblem) {
  const {push} = useRouter();
  const pathName = usePathname();
  return (
    <div >
      <Card className='flex border-b gap-1 shadow-lg my-4 hover:bg-slate-100'   >
        <div className='max-w-1/4 my-auto px-2'>
          <Image
            src={problem.header_img}
            height='160'
            width='180'
            alt='Image'
            radius='sm'
            className='bg-gray-200 rounded-2xl'
          />
        </div>
        <div className="w-full">
          <Group position='apart' mt='md' mb='xs'>
            <div className=' font-extrabold text-ellipsis overflow-hidden text-gray-700 text-lg line-clamp-1'>{problem.title}</div>
            <Badge className='text-lg p-3'>
              12 <span className='text-base'>Upvotes</span>
            </Badge>
           {
            pathName === '/dashboard' && (
              <Badge className='text-lg p-3 bg-green-100'>
              {problem.status &&  (<span className='text-base'>{problem.status}</span>)}
            </Badge>
            )
           }
          </Group>
          <div className='min-w-full text-ellipsis  overflow-hidden text-md text-gray-500 tracking-wide line-clamp-3'>{problem.description}</div>
          <div className=' flex justify-start items-center'>
            <Button
              variant='outline'
              mt='md'
              radius='sm'
              className=' hover:bg-blue-500 transition  ease-in-out hover:text-white my-4 md:mr-5'
              onClick={() => push(`/problem/${problem.id}`)}
            >
              <span className="">Go to Challenge</span>
              <IconArrowRight />
            </Button>
            <TagDisplayer tags={problem.tags} ></TagDisplayer>
          </div>
        </div>
      </Card>
    </div>
  )
}
