import {useRouter} from "next/navigation";
import { useAuth } from '@/utils/auth'
import { Avatar, Menu } from '@mantine/core'
import { IconLogout, IconSettings } from '@tabler/icons-react'
import Link from 'next/link'

const Branding = () => {
    const {push} = useRouter();
    const {logout} = useAuth() as any
    return (
        <div className="sticky top-0 py-5 bg-white flex flex-col md:flex-row border-b-2 border-gray-300/30 justify-between md:px-60 items-center gap-4 md:gap-10">
            <div className="flex gap-10 ">
                <img src="/assets/innopsi.png" alt="innopsi_logo" onClick={()=>{push('/')}} className="h-10 hover:cursor-pointer object-contain" />
                <img src="/assets/g20c20.png" alt="g20c20_logo" onClick={()=>{push('/')}} className="h-10 hover:cursor-pointer object-contain" />
            </div>
            <div className="flex flex-row gap-10 items-center">
                <div className="text-lg font-bold text-gray-500 items-center ">
                 <span className="px-2 hover:text-blue-500">
                    <Link href='/home' >Home</Link>
                </span>
                    <span className="px-2 hover:text-blue-500">
                    <Link href='/dashboard' >Dashboard</Link>
                </span>
                </div>
                <div className="border-2 inline-block border-white hover:border-3 hover:p-0 hover:m-1 hover:border-orange-400 bg-gray-300/30 p-1 rounded-full ">
                    <Menu shadow="md" width={200} transitionProps={{ transition: 'pop-top-right', duration: 150 }}>
                        <Menu.Target>
                            <Avatar size="md" radius="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<IconSettings size={14} />}> <Link href='/dashboard' >Dashboard</Link></Menu.Item>
                            <Menu.Item icon={<IconLogout size={14} /> } onClick={logout} >Log Out</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Branding;
