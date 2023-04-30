import React from 'react'
import Image from 'next/image'

interface EventPropType {
  title: string
  description: string
  image: string
}

export default function EventCard(event: EventPropType) {
  return (
    <div className='grid grid-cols-12 gap-2 h-full my-2 space-x-1 mx-2'>
      <div className='bg-white col-span-2 py-1 px-2 rounded-2xl flex justify-center shadow-lg items-center'>
        {event.image && (
          <Image
            src={event.image}
            height={200}
            width={150}
            className='rounded-2xl'
            alt='problem_image'
          />
        )}
      </div>
      <div className='flex flex-col col-span-10 gap-2 p-2 bg-white rounded-2xl shadow-lg h-full overflow-auto border'>
        <div className='font-semibold py-2 px-1 text-lg text-gray-700 overflow-ellipsis overflow-hidden border-b border-gray-300/30'>
          {event.title}
        </div>
        <div className='text-gray-500 py-1 px-2 overflow-ellipsis overflow-hidden line-clamp-3'>
          {event.description}
        </div>
      </div>
    </div>
  )
}
