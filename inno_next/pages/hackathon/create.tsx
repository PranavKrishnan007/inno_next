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
    <div className="bg-slate-50">
        <div className="sticky top-0 z-20">
            <Branding />
        </div>
      <div>
          <div className='bg-gray-100 text-gray-800  text-center font-bold p-4 md:p-8 md:text-5xl text-2xl rounded-t-xl border-gray-300/30 border-b-2'>
              Create Hackathon
          </div>
        <div className='min-h-screen container mx-auto px-4 md:px-8 md:py-10'>
          <form className=' rounded-xl flex flex-col p-4 md:p-8'>
              <label className='block text-black pb-2 font-medium text-xl mb-2'>
                Basic Details
              </label>
              <div className="bg-slate-100 shadow-md rounded-xl p-5">
              <div className='py-5'>
              <label className='block text-gray-700 text-xl font-medium mb-2'>
                Hackathon Title
              </label>
              <input
                onChange={handleProblemChange}
                className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                id='title'
                type='text'
                placeholder='Hackathon Title'
              />
            </div>
              <div className='pb-5'>
                  <label className='block text-gray-700 text-xl font-medium mb-2'>
                      Tagline
                  </label>
                  <input
                      onChange={handleProblemChange}
                      className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                      id='tagline'
                  />
              </div>
              <div className='pb-5'>
                  <label className='block text-gray-700 text-xl font-medium mb-2'>
                      Contact Details
                  </label>
                  <input
                      onChange={handleProblemChange}
                      className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                      id='contactDetails'
                  />
              </div>
              <div className='pb-5'>
                  <label className='block text-gray-700 text-xl font-medium mb-2'>
                      Description
                  </label>
                  <input
                      onChange={handleProblemChange}
                      className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                      id='description'
                  />
              </div>
              </div>

            <label className='block text-black text-xl font-medium mt-10 mb-4'>
              Upload Header Image
            </label>
            <div className="items-center bg-slate-100 flex shadow-md mb-4 flex-col p-10 w-full rounded-xl justify-center bg-grey-lighter gap-4">
              <div>
                <img src={problem.header_img || '/assets/c20-tst-cover.jpg'} alt="" className="flex  object-cover max-h-64 w-full rounded-2xl shadow-xl" width="100%"  height="300px" />
              </div>
                <label className="w-64 flex flex-col items-center px-4 py-2 text-blue-500 hover:text-blue-700 font-medium rounded-lg  tracking-wide uppercase drop-shadow-xl cursor-pointer hover:bg-blue ">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path
                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                        />
                    </svg>
                    <span className="mt-2 text-base ">Select a file</span>
                    <input id='header_img' onChange={handleProblemChange} type='file' className="hidden" />
                </label>
            </div>
              <label className='block text-black text-xl font-medium mt-10 mb-4'>
                Schedule
              </label>
              <div className='flex gap-4 justify-between'>
                  <div className="bg-slate-100 shadow-md rounded-xl p-5 w-1/2 mb-2">
                      <div className='pb-4'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>
                              Application Open Date
                          </label>
                          <input
                              onChange={handleProblemChange}
                              className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                              id='applicationOpenDate'
                              type='datetime-local'
                          />
                      </div>
                      <div className='pb-4'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>
                              Application Close Date
                          </label>
                          <input
                              onChange={handleProblemChange}
                              className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                              id='applicationCloseDate'
                              type='datetime-local'
                          />
                      </div>
                  </div>
                  <div className="bg-slate-100 shadow-md rounded-xl p-5 w-1/2 mb-2">
                      <div className='pb-4'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>
                              Hackathon Start Date
                          </label>
                          <input
                              onChange={handleProblemChange}
                              className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                              id='hackathonStartDate'
                              type='datetime-local'
                          />
                      </div>
                      <div className='pb-4'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>
                              Hackathon End Date
                          </label>
                          <input
                              onChange={handleProblemChange}
                              className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                              id='hackathonEndDate'
                              type='datetime-local'
                          />
                      </div>
                  </div>
              </div>
            <div className='pb-4 mt-10'>
              <label className='block text-black text-xl font-medium mb-2'>Additional Details</label>
                <div className='p-4 bg-slate-100 shadow-md rounded-xl'>
              <div className='w-full rounded-md h-72 mb-5'>
                <div style={{ height: '90%', width: '100%' }}>
                  <div ref={quillRef} className='rounded-b-md' />
                </div>
              </div>
            </div>
            </div>
              <div className='flex gap-4 justify-between my-10'>
                  <div className="bg-slate-100 shadow-md rounded-xl p-5 w-1/2 mb-2 ">
                      <div className='w-full  rounded-lg'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>Tags</label>
                          <TagSelector id='tags' createable={true} onChange={handleSelectChange} ></TagSelector>
                      </div>
                  </div>
                  <div className="bg-slate-100 shadow-md rounded-xl p-5 w-1/2 mb-2 " >
                      <div className='pb-4'>
                          <label className='block text-gray-700 text-xl font-medium mb-2'>
                              Participant Limit
                          </label>
                          <input
                              onChange={handleProblemChange}
                              className='appearance-none bg-gray-200/50 border focus:border-gray-100 border-gray-200 focus:outline-none focus:shadow-md rounded-md w-full p-4 text-gray-700  placeholder:text-lg'
                              id='paticipantLimit'
                              type='number'
                          />
                      </div>
                  </div>
              </div>

            <div className=''>
              <Button onClick={submit} size="xl"  variant='filled' className='bg-blue-500'>
                Submit for Moderation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
