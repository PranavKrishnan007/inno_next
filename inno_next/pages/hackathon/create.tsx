import React from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Button, MultiSelect } from '@mantine/core'
import Branding from '@/components/branding'

export default function CreateHackathon() {
  const { quill, quillRef } = useQuill()
  console.log(quill, quillRef)

  return (
    <div>
      <div>
        <div className='min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative'>
          <div className='bg-white sticky flex flex-col top-0 z-50'>
            <Branding />
            <div className='border  pt-4'>
              <div className='bg-white text-secondary font-bold p-4 md:p-8 md:text-5xl text-2xl rounded-t-xl border-gray-300/30 border-b-2'>
                Create Hackathon
              </div>
            </div>
          </div>
          <form className='bg-white border rounded-b-xl flex flex-col p-4 md:p-8'>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Hackathon Title
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='hackathonTitle'
                type='text'
                placeholder='Hackathon Title'
              />
            </div>
            <label className='block text-gray-700 text-2xl font-medium mb-2'>
              Upload Header Image
            </label>
            <div className="flex flex-row items-center justify-center bg-grey-lighter gap-4">
              <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-800">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span className="mt-2 text-base leading-normal">Select a file</span>
                <input id='header_img' onChange={() => {}} type='file' className="hidden" />
              </label>
              <div>
                <img src={'/assets/c20-tst-cover.jpg'} alt="" className="flex object-cover" width="700px" height="300px" />
              </div>
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Tagline``
              </label>
              <textarea
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='hackathonTitle'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>About</label>
              <div className='w-full h-72'>
                <div style={{ height: '100%', width: '100%' }}>
                  <div ref={quillRef} className='rounded-b-xl' />
                </div>
              </div>
            </div>
            <div className='w-full bg-white md:pt-10 pt-28 rounded-lg'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>Tags</label>
              <MultiSelect
                data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                placeholder='Select a tag'
                transitionProps={{
                  duration: 150,
                  transition: 'pop-top-left',
                  timingFunction: 'ease',
                }}
                searchable
                className='focus:border-primary focus:border-2'
                nothingFound='No tags found'
                id='tags'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Contact Details
              </label>
              <textarea
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='contactDetails'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Additional Details
              </label>
              <textarea
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='additionalDetails'
              />
            </div>
            <div className='w-full bg-white pb-5 rounded-lg'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>Badges</label>
              <MultiSelect
                data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                placeholder='Select a tag'
                transitionProps={{
                  duration: 150,
                  transition: 'pop-top-left',
                  timingFunction: 'ease',
                }}
                searchable
                className='focus:border-primary focus:border-2'
                nothingFound='No tags found'
                id='badges'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Prize
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='prize'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Participant Limit
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='paticipantLimit'
                type='number'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Application Open Date
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='applicationOpenDate'
                type='date'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Application Close Date
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='applicationCloseDate'
                type='date'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Hackathon Start Date
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='hackathonStartDate'
                type='date'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Hackathon End Date
              </label>
              <input
                onChange={() => null}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='hackathonEndDate'
                type='date'
              />
            </div>
            <div className='pt-5'>
              <Button type='submit' variant='outline'>
                Submit for Moderation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
