import Branding from '../../src/Components/branding'
import { Image } from '@mantine/core'

export default function Hackathon() {
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
                src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                height='250'
                width='512'
                alt='Norway'
                radius='md'
              />
            </div>
            <div className='m-4 md:m-5 md:w-1/2'>
                <h1 className='text-4xl font-bold md:my-3'>
                    The Ultimate hackathon
                </h1>
                <h3 className='text-lg font-medium text-gray-800'>
                    this brings together the best of the best
                </h3>
                <div className='grid md:grid-cols-2 gap-2 my-5'>
                    <div>
                        Dates: 12th - 14th August
                    </div>
                    <div>
                    Applications close on: 10th August
                    </div>
                    <div>
                        Prize Money: 1,00,000
                    </div>
                    <div>
                        Number of Teams: 10
                    </div>
                </div>
            <div className='mx-1 text-xl font-semibold bg-orange-500 w-min text-white py-2 px-5 rounded-lg'>
                Register
            </div>
            </div>
            </div>
            <div className='mx-3 my-5 md:my-7'>
                Content
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
