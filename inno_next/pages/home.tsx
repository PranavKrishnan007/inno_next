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
import { getAllInnovations, getAllProblems, getAllHackathons } from '@/utils/Services';
import ProblemCard from '@/components/Dashboard/ProblemCard';
import InnovationCard from '@/components/Dashboard/InnovationCard';
import HackathonCard from '@/components/Dashboard/HackathonCard';
import { useAuth } from '@/utils/auth';
import { useRouter } from "next/navigation";
import { TagSelector } from '@/components/tagSelector';

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
            styles={(theme) => ({
                input: {
                    '&:focus-within': {
                        borderColor: theme.colors.orange[7],
                    },
                },
            })}
        />
    )
}


const tabs = ['Problems', 'Innovations', 'Hackathons']
export default function Listings() {
    const [activeTab, setActiveTab] = useState(0);
    const [problems, setProblems] = useState<IProblem[]>([]);
    const [hackathons, setHackathons] = useState<IHackathon[]>([]);
    const [innovations, setInnovations] = useState<IInnovation[]>([]);
    const { isAuthenticated, user } = useAuth() as any;
    useEffect(() => {
        if (activeTab == 0) {
            getAllProblems().then((res: IProblem[]) => {
                setProblems(res)
            })
            return
        }
        if (activeTab == 1) {
            getAllInnovations().then((res: IInnovation[]) => {
                setInnovations(res)
            })
            return
        }
        if (activeTab == 2) {
            getAllHackathons().then((res: IHackathon[]) => {
            
                setHackathons(res)
            })
            return
        }
    }, [activeTab])
    const { push } = useRouter();


    const searchBasedOnTags = (selectedTags:string[]) => {

    
        setProblems(problems.filter(problem => {
            problem.tags?.data.forEach((tag:any)=>{
        
            selectedTags.includes(tag.id)})
        }))

        setHackathons(hackathons.filter(hackathon => {
            hackathon.tags?.data.forEach((tag:any)=> selectedTags.find( id => id+'' == tag.id) )
        }))

        setInnovations(innovations.filter(innovation => {
            innovation.tags?.data.forEach((tag:any)=>selectedTags.find( id => id+'' == tag.id))
        }))
    }
    
    

    return (
        <div className="min-h-screen mx-auto ">
            <div className="sticky top-0 z-20">
                <Branding />
            </div>
            <div className="bg-white container mx-auto  flex flex-col">
                <div className="flex flex-row gap-10 pb-2 h-fit min-h-[80vh]">
                    <div className="flex flex-col gap-4 w-full md:w-3/4 pt-4">
                        <div className="flex flex-row w-full gap-2 ">
                            <div className="bg-white w-full rounded-full">
                                <div className="flex flex-row h-full justify-center shadow gap-1 p-1 items-center rounded-md bg-gray-300/30">
                                    {tabs?.map((tabName, index) => (
                                        <div className={clsx([
                                            "flex justify-center items-center w-1/3 h-full p-2 rounded-md  font-semibold hover:bg-primary/80  hover:text-white transition duration-300 ease-in-out",
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
                        <div className="flex flex-row justify-between items-center gap-4">
                            <div className="w-2/3 h-full rounded-full border-2 border-gray-300/30 p-1 bg-white">
                                <div className="rounded-full w-full shadow">
                                    <InputWithButton />
                                </div>
                            </div>
                            <div className="w-1/3 bg-gray-300/30 p-1 rounded-lg border-2 border-white">
                                <Button
                                    className="bg-primary hover:bg-orange-500/90 w-full text-white"
                                    onClick={() => { activeTab === 0 ? push('/problem/create') : activeTab === 1 ? push('/innovation/create') : activeTab === 2 ? push('/hackathon/create') : push('/home') }}
                                >
                                    <div className='hidden md:block'>
                                        {activeTab === 0 ? "Submit Problems" : activeTab === 1 ? " Submit Innovations" : "Create Hackathons"}
                                    </div>
                                    <div className='block md:hidden'>
                                        {"create"}
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="bg-white rounded-2xl p-2">
                                    <div className="border-y bg-gray-50 shadow-2xl max-h-[65vh] overflow-auto flex-col no-scrollbar p-2">
                                        {activeTab === 0 &&
                                            problems?.map((problem, index) => (
                                                <ProblemCard {...problem} key={index} />
                                            ))
                                        }
                                        {activeTab === 1 &&
                                            innovations?.map((innovation, index) => (
                                                <InnovationCard {...innovation} key={index} />
                                            ))}
                                        {activeTab === 2 &&
                                            hackathons?.map((hackathon, index) => (
                                                <HackathonCard {...hackathon} key={index} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 hidden md:block md:w-1/4">
                        <div className="flex justify-between">
                            <p className="text-xl px-2 font-bold text-gray-700 tracking-wide w-full pt-3">Select Tags</p>
                        </div>
                        <div className='pt-4'>
                            <TagSelector id="tagSearch" createable={false} onChange={searchBasedOnTags} ></TagSelector>
                        </div>
                        {/* <div className="flex justify-between">
                            <p className="text-xl px-2 font-bold text-gray-700 tracking-wide w-full pt-3">Select Badge</p>
                        </div>
                        <div className="border bg-white mb-6 mt-2 p-1 mx-1 rounded-full w-ful">
                            <MultiSelect
                                data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                                placeholder="Select a tag"
                                styles={(theme) => ({
                                    input: {
                                        '&:focus-within': {
                                            borderColor: theme.colors.orange[7],
                                        },
                                    },
                                })}
                                transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
                                searchable
                                nothingFound='No tags found'
                                radius="xl"
                                variant="filled"
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl px-2 font-bold text-gray-700 tracking-wide w-full pt-3">Select Theme</p>
                        </div>
                        <div className="border bg-white mb-6 mt-2 p-1 mx-1  rounded-full w-ful">
                            <MultiSelect
                                data={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
                                placeholder="Select a tag"
                                styles={(theme) => ({
                                    input: {
                                        '&:focus-within': {
                                            borderColor: theme.colors.orange[7],
                                        },
                                    },
                                })}
                                transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
                                searchable
                                nothingFound='No tags found'
                                radius="xl"
                                variant="filled"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
