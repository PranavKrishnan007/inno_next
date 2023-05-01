import {
    TextInput,
    TextInputProps,
    ActionIcon,
    clsx,
    Button,
    MultiSelect,
} from '@mantine/core'
import { IconSearch, IconArrowRight } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import Branding from '../components/branding';
import { IHackathon, IInnovation, IProblem } from '@/utils/Interfaces/coreEntity';
import { getAllInnovations, getAllProblems, getAllHackathons} from '@/utils/Services';
import ProblemCard from '@/components/Dashboard/ProblemCard';
import InnovationCard from '@/components/Dashboard/InnovationCard';
import HackathonCard from '@/components/Dashboard/HackathonCard';

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
    const [activeTab, setActiveTab] = useState(1);
    const [problems, setProblems] = useState<IProblem[]>([]);
    const [hackathons, setHackathons] = useState<IHackathon[]>([]);
    const [innovations, setInnovations] = useState<IInnovation[]>([]);

    useEffect(() => {
        console.log(activeTab)
        if(activeTab == 0) {
            getAllProblems().then((res:IProblem[]) => {
                setProblems(res)
            })
            return
        }

        if(activeTab == 1) {
            getAllInnovations().then((res:IInnovation[]) => {
                setInnovations(res)
            })
            return
        }

        if(activeTab == 2) {
            getAllHackathons().then((res:IHackathon[]) => {
                setHackathons(res)
            })

            return
        }

    }, [activeTab])

    return (
        <div className="bg-background">
            <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <Branding />
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
                                                problems.map((problem, index) => (
                                                    <ProblemCard {...problem} key={index}/>
                                                ))}
                                            {activeTab === 1 &&
                                                innovations.map((innovation, index) => (
                                                    <InnovationCard {...innovation} key={index}/>
                                                ))}
                                            {activeTab === 2 &&
                                                hackathons.map((hackathon, index) => (
                                                    <HackathonCard {...hackathon} key={index}/>
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