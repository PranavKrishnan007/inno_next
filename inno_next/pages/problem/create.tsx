import { useQuill} from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Button } from '@mantine/core'
import Branding from '@/components/branding'
import { IProblem } from '@/utils/Interfaces'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { createProblem, fileUpload } from '@/utils/Services'
import { useAuth } from '@/utils/auth'
import { TagSelector } from '@/components/tagSelector'


export default function CreateProblem() {
    const { quill, quillRef } = useQuill()
    const {user} = useAuth() as any

    const [problem, setProblem] = useState<IProblem>({
        title: '',
        description: '',
        header_img: '',
        content: '',
        tags: [],
    })

    useLayoutEffect(()=>{
        if(quill) {
            quill.getModule('toolbar').addHandler('image', imageHandler)
        }
    })

    const handleProblemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, e.target.id)
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
        const problemData:IProblem = {
            ...problem,
            content : quill.root.innerHTML,
            author : user.id as number,
        }
        createProblem(problemData)

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
        <div className="bg-background">
            <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <Branding />
                    <div className='bg-background pt-4'>
                        <div className='bg-white text-secondary font-bold p-4 md:p-8 md:text-5xl text-2xl rounded-t-xl border-gray-300/30 border-b-2'>
                            Submit Problem
                        </div>
                    </div>
                </div>
                <form className='bg-white rounded-b-xl flex flex-col p-4 md:p-8'>
                    <div className='pb-4'>
                        <label className='block text-gray-700 text-2xl font-medium mb-2'>
                            Problem Title
                        </label>
                        <input
                            onChange={handleProblemChange}
                            className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                            id='title'
                            type='text'
                            placeholder='Problem Title'
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
                            type='text'
                            placeholder='Description'
                        />
                    </div>
                    <div className='pb-4'>
                        <label className='block text-gray-700 text-2xl font-medium mb-2'>
                            Content
                        </label>
                        <div className='w-full h-72'>
                            <div style={{ height: "100%", width: "100%" }}>
                                <div ref={quillRef} className='rounded-b-xl' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white md:pt-10 pt-28 rounded-lg">
                        <label className='block text-gray-700 text-2xl font-medium mb-2'>
                            Tags
                        </label>
                        <TagSelector createable={true} onChange={handleSelectChange} id="tagSelector"></TagSelector>
                    </div>
                    <div className='pt-5'>
                        <Button onClick={submit} variant='outline'>Submit for Moderation</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}