import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Button, MultiSelect } from '@mantine/core'
import Branding from '@/src/Components/branding'

export default function CreateInnovation() {
    const { quill, quillRef } = useQuill()
    console.log(quill, quillRef)

    return (
        <div className="bg-background">
            <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <Branding />
                    <div className='bg-background pt-4'>
                        <div className='bg-white text-secondary font-bold p-4 md:p-8 md:text-5xl text-2xl rounded-t-xl border-gray-300/30 border-b-2'>
                            Submit Innovation
                        </div>
                    </div>
                </div>
                <form className='bg-white rounded-b-xl flex flex-col p-4 md:p-8'>
                    <div className='pb-4'>
                        <label className='block text-gray-700 text-2xl font-medium mb-2'>
                            Innovation Title
                        </label>
                        <input
                            onChange={() => (null)}
                            className='appearance-none border border-gray-500/40 rounded-xl w-full p-4 text-gray-700 leading-tight placeholder:text-lg'
                            id='innovationTitle'
                            type='text'
                            placeholder='Innovation Title'
                        />
                    </div>
                    <div className='pb-4'>
                        <label className='block text-gray-700 text-2xl font-medium mb-2'>
                            Description
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
                        <MultiSelect
                            data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                            placeholder="Select a tag"
                            transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
                            searchable
                            className='focus:border-primary focus:border-2'
                            nothingFound='No tags found'
                        />
                    </div>
                    <div className='pt-5'>
                        <Button type='submit' variant='outline'>Submit for Moderation</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}