import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Button } from '@mantine/core'
import Branding from '@/components/branding'
import { useAuth } from '@/utils/auth'
import { IHackathon } from '@/utils/Interfaces'
import { createHackathon, fileUpload } from '@/utils/Services'
import { TagSelector } from '@/components/tagSelector'

export default function CreateHackathon() {
  const { quill, quillRef } = useQuill()

  const {user} = useAuth() as any

  const [problem, setProblem] = useState<IHackathon>({
     title : '',
     description : '',
     tagline : '',
     header_img : '',
     partcipantLimit : 250,
     applicationCloseDate : new Date(),
     applicationOpenDate : new Date(),
     hackathonStartDate : new Date(),
    hackathonEndDate : new Date(),
    contactDetails : '',
     additionalDetails : '',
     tags : [],
  })

  useEffect(()=>{
      if(quill) {
          quill.getModule('toolbar').addHandler('image', imageHandler)
      }
  })

  const handleProblemChange = (e: React.ChangeEvent<HTMLInputElement>) => {

      if (e.target.id === 'header_img') {
          fileUpload(e).then(res => {
              if(!res) return
              setProblem({
                  ...problem,
                  header_img: res.value
              })
      })
      return
  }

      setProblem({
          ...problem,
          [e.target.id]: e.target.value
      })
  }

  const handleSelectChange = (e : string[]) => {
      setProblem({
          ...problem,
          tags : e
      })
  }

  const submit = ()=> {
      const hackathonData:IHackathon = {
          ...problem,
          additionalDetails : quill.root.innerHTML,
          author : parseInt(user.id),
      }
      createHackathon(hackathonData)
  }

  const imageHandler = async () =>{
      const input = document.createElement('input');

      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();


      input.onchange = async (e:any) => {
          const imageData = await fileUpload(e);
          if(!imageData) return
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageData.value )
      };
  }



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
                onChange={handleProblemChange}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='title'
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
                <span className="mt-2 text-sm text-center md:text-base leading-normal">Select a file</span>
                <input id='header_img' onChange={handleProblemChange} type='file' className="hidden" />
              </label>
              <div>
                <img src={problem.header_img || '/assets/c20-tst-cover.jpg'} alt="" className="flex object-cover" width="700px" height="300px" />
              </div>
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Tagline
              </label>
              <input
                onChange={handleProblemChange}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='tagline'
              />
            </div>
            <div className='w-full bg-white pb-4 rounded-lg'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>Tags</label>
              <TagSelector id='tags' createable={true} onChange={handleSelectChange} ></TagSelector>
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Contact Details
              </label>
              <input
                onChange={handleProblemChange}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='contactDetails'
              />
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>
                Description
              </label>
              <input
                onChange={handleProblemChange}
                className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                id='description'
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className='pb-4'>
                <label className='block text-gray-700 text-2xl font-medium mb-2'>
                  Participant Limit
                </label>
                <input
                  onChange={handleProblemChange}
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
                  onChange={handleProblemChange}
                  className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                  id='applicationOpenDate'
                  type='datetime-local'
                />
              </div>
              <div className='pb-4'>
                <label className='block text-gray-700 text-2xl font-medium mb-2'>
                  Application Close Date
                </label>
                <input
                  onChange={handleProblemChange}
                  className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                  id='applicationCloseDate'
                  type='datetime-local'
                />
              </div>
            </div>
            <div className='pb-4'>
              <label className='block text-gray-700 text-2xl font-medium mb-2'>Additional Details</label>
              <div className='w-full h-72'>
                <div style={{ height: '100%', width: '100%' }}>
                  <div ref={quillRef} className='rounded-b-xl' />
                </div>
              </div>
            </div>
            <div className="md:pt-10 pt-28 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className='pb-4'>
                <label className='block text-gray-700 text-2xl font-medium mb-2'>
                  Hackathon Start Date
                </label>
                <input
                  onChange={handleProblemChange}
                  className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                  id='hackathonStartDate'
                  type='datetime-local'
                />
              </div>
              <div className='pb-4'>
                <label className='block text-gray-700 text-2xl font-medium mb-2'>
                  Hackathon End Date
                </label>
                <input
                  onChange={handleProblemChange}
                  className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                  id='hackathonEndDate'
                  type='datetime-local'
                />
              </div>
            </div>
            <div className='pt-5'>
              <Button onClick={submit} variant='outline'>
                Submit for Moderation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
