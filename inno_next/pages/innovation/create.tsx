import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Avatar, Button, Menu, MultiSelect } from '@mantine/core'
import { IconLogout, IconSettings } from '@tabler/icons-react'

export default function CreateInnovation() {
    const { quill, quillRef } = useQuill()
    console.log(quill, quillRef)

    return (
        <div className="bg-background">
            <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <div className="flex flex-col md:flex-row w-full relative justify-center items-center bg-background gap-4 md:gap-10">
                        <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain" />
                        <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain" />
                        <div className="absolute top-2 right-0">
                            <Menu shadow="md" width={200} transitionProps={{ transition: 'pop-top-right', duration: 150 }}>
                                <Menu.Target>
                                    <Avatar size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item icon={<IconSettings size={14} />}>Dashboard</Menu.Item>
                                    <Menu.Item icon={<IconLogout size={14} />}>Log Out</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </div>
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