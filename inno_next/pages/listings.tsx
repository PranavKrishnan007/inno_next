import {
    TextInput,
    TextInputProps,
    ActionIcon,
    clsx,
    Avatar,
    Menu,
    Button,
    MultiSelect,
} from '@mantine/core'
import { IconSearch, IconArrowRight, IconSettings, IconLogout } from '@tabler/icons-react'
import { useState } from 'react'
import Image from 'next/image'
import EventCard from '../components/listings/EventCard';

export function InputWithButton(props: TextInputProps) {
    return (
        <TextInput
            icon={<IconSearch size='1.1rem' stroke={1.5} />}
            radius='xl'
            size='md'
            rightSection={
                <ActionIcon
                    size={32}
                    radius='xl'
                    className='bg-blue-500 hover:bg-blue-600'
                    variant='filled'
                >
                    <IconArrowRight size='1.1rem' stroke={1.5} />
                </ActionIcon>
            }
            placeholder='Search questions'
            rightSectionWidth={42}
            {...props}
        />
    )
}
const PROBLEMS = [
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. asldfkajfja ldkfj klasj fdl jaksldfj lkasj dflkas jdf kas jfdljsakdfj lkasj fklasdjlfkja skldf jlaskjfla slfdj ksa fjlsaj dkfl jaslfj klasj fklsajfls djfl asjkfj asklfdj laks jdfklasjfl asjd flask fjlka sjfklasj klf jaskldfj klas jdfklasj dkflj asklf jsdlfk jasklf jaklsfj asklf jlasfj klasf jklas fjsaj dflajkljflas dfjklas flas I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a website?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
]
const HACKATHONS = [
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a hackathon?',
        description:
            'I want to make a hackathon for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
]
const INNOVATIONS = [
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
    {
        title: 'How to make a innovation?',
        description:
            'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
        image: '/assets/placeholder.jpeg',
    },
]
const NOTICE = [
    {
        title: 'this is one notice',
        description: 'this is the description of the notice',
    },
    {
        title: 'this is one notice',
        description: 'this is the description of the notice',
    },
    {
        title: 'this is one notice',
        description: 'this is the description of the notice',
    },
    {
        title: 'this is one notice',
        description: 'this is the description of the notice',
    },
    {
        title: 'this is one notice',
        description: 'this is the description of the notice',
    },
]
const tabs = ['Problems', 'Innovations', 'Hackathons']
export default function Listings() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-background">
            <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <div className="flex flex-col md:flex-row w-full relative justify-center items-center bg-background gap-4 md:gap-10">
                        <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain" />
                        <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain" />
                        <div className="absolute bottom-0 right-0">
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
                    <div className="flex flex-row gap-10 pb-2 h-fit bg-background">
                        <div className="flex flex-col gap-4 w-3/4 pt-4">
                            <div className="flex flex-row w-full gap-2">
                                <div className="bg-white w-full p-2 rounded-full">
                                    <div className="flex flex-row h-full justify-center shadow items-center rounded-full bg-gray-300/30">
                                        {tabs.map((tabName, index) => (
                                            <div className={clsx([
                                                "flex justify-center items-center w-1/3 h-full p-2 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300 ease-in-out",
                                                activeTab === index ? "bg-primary text-white" : "text-gray-500"
                                            ])}
                                                 onClick={() => setActiveTab(index)}
                                            >
                                                {tabName}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <div className="w-1/3 h-full rounded-full p-2 bg-white">
                                    <div className="rounded-full w-full shadow">
                                        <InputWithButton />
                                    </div>
                                </div>
                                <div className="w-1/3 bg-white p-2 rounded-lg">
                                    <MultiSelect
                                        data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                                        placeholder="Select a tag"
                                        transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
                                        searchable
                                        nothingFound='No tags found'
                                    />
                                </div>
                                <div className="w-1/3 bg-white p-2 rounded-lg">
                                    <Button className="bg-primary hover:bg-orange-600 w-full text-white">
                                        {activeTab === 0 ? "Create Problem" : activeTab === 1 ? "Create Innovation" : "Create Hackathon"}
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="bg-white rounded-2xl p-2">
                                        <div className="bg-gray-300/30 flex flex-col gap-3 rounded-2xl p-2">
                                            {activeTab === 0 &&
                                                PROBLEMS.map((problem, index) => (
                                                    <EventCard {...problem} key={index}/>
                                                ))}
                                            {activeTab === 1 &&
                                                INNOVATIONS.map((innovation, index) => (
                                                    <EventCard {...innovation} key={index}/>
                                                ))}
                                            {activeTab === 2 &&
                                                HACKATHONS.map((hackathon, index) => (
                                                    <EventCard {...hackathon} key={index}/>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 w-1/4">
                            <div className="flex flex-col bg-white rounded-full h-fit p-2">
                                <div className="h-full bg-gray-300/30 shadow rounded-full">
                                    <div className="flex justify-center p-2 items-center h-full font-semibold text-gray-700">
                                        Notices
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 gap-4 flex flex-col w-full h-fit sticky">
                                <div className="bg-white rounded-2xl p-2">
                                    <div className="bg-gray-300/30 flex flex-col gap-3 rounded-2xl p-2">
                                        {NOTICE.map((notice) => (
                                            <div className="flex flex-col shadow px-2 py-1 bg-white rounded-lg">
                                                <div className="font-semibold text-xl text-gray-700 border-b border-gray-300/30">
                                                    {notice.title}
                                                </div>
                                                <div className="text-gray-500 text-sm">
                                                    {notice.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}