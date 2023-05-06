import { useAuth } from "@/utils/auth";
import { Avatar, Menu } from "@mantine/core"
import { IconLogout, IconSettings } from "@tabler/icons-react"
import Link from "next/link";

const Branding = () => {
    const {logout} = useAuth() as any
    return (
        <div className="flex flex-col md:flex-row w-full relative justify-center items-center gap-4 md:gap-10">
            <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain" />
            <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain" />
            <div className="absolute top-2 right-0">
                <Menu shadow="md" width={200} transitionProps={{ transition: 'pop-top-right', duration: 150 }}>
                    <Menu.Target>
                        <Avatar size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item icon={<IconSettings size={14} />}> <Link href='/dashboard' >Dashboard</Link></Menu.Item>
                        <Menu.Item icon={<IconLogout size={14} /> } onClick={logout} >Log Out</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>

    )
}

export default Branding;
