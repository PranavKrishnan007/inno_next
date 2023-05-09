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

// const testProblem = [{
//     title: 'Developing a Haptic Technology-based Skill Development Program ',
//     description: 'Skill development is crucial for the growth and development of individuals and communities.' +
//         ' However, traditional skill development programs often face challenges such as lack of access,' +
//         ' low participation rates, and limited feedback mechanisms. The use of haptic technology in skill ' +
//         'development programs has the potential to enhance the learning experience and improve the effectiveness of the program...',
//     tag1: 'Haptic Technology',
//     tag2: 'Smart Learning',
//     tag3: 'Skill Development',
// },
// {
//     title: 'Developing Coir Fibre for Sustainable Cooling Systems',
//     description: 'The use of conventional refrigeration systems for cooling contributes significantly to global' +
//         ' warming and is unsustainable. Coir fibre is a natural, renewable material that has shown promise as a' +
//         ' sustainable alternative for cooling systems. Coir fibre has excellent moisture absorption properties and ' +
//         'can be used to regulate temperature and humidity. ',
//     tag1: 'Eco-friendly Cooling',
//     tag2: 'Coir Fibre',
//     tag3: 'Sustainability',
// },
// {
//     title: 'Developing an IoT Room for the Elderly',
//     description: ' As the population ages, there is a growing need for smart technologies ' +
//         'that can enhance the quality of life of the elderly. One of the key challenges faced by' +
//         ' the elderly is a loss of independence due to physical and cognitive limitations. Smart technologies,' +
//         ' such as the Internet of Things (IoT), can play a significant role in addressing these challenges and' +
//         ' improving the quality of life for the elderly. ',
//     tag1: 'Smart IoT',
//     tag2: 'Elderly Care',
//     tag3: 'Health Care',
// },
// ]


export function InputWithButton(props: TextInputProps) {
    return (
        <TextInput
            icon={<IconSearch size='1.1rem' stroke={1.5} />}
            radius='xl'
            size='md'
            variant='outline'
            rightSection={
                <ActionIcon
                    size={32}
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
                    '&:': {
                        borderColor: theme.colors.orange[7],
                    },
                },
            })}
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
                console.log(res)
                setHackathons(res)
            })

            return
        }

    }, [activeTab])
    const { push } = useRouter();

    return (
        <div className="min-h-screen mx-auto relative">
            <div className="bg-white sticky flex flex-col top-0 ">
                <Branding />
                <div className="flex grow flex-row pb-2 min-h-[80vh]">
                    <div className="fixed top-0 pt-44 left-0 h-screen w-1/4 bg-background ">
                        <div className="flex flex-row justify-between px-3 items-center gap-4">
                            <div className="w-full px-4 h-full p-1">
                                <div className="rounded-full w-full shadow">
                                    <InputWithButton />
                                </div>
                            </div>
                        </div>
                        <div className='px-7 pt-4'>
                            <p className='text-white font-medium text-lg'>
                                SDGs
                            </p>
                        </div>
                        <div className="border bg-background my-3 p-1 mx-7 rounded-md w-ful">
                            <MultiSelect
                                data={['SDGs-1', 'SDG-2', 'SDG-2', 'SDG-3', 'SDG-5', 'SDG-6', 'SDG-7', 'SDG-8']}
                                placeholder="Select a SDG"
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
                                variant="outline"
                            />
                        </div>

                        <div className='px-7 pt-4'>
                            <p className='text-white font-medium text-lg'>
                                Themes
                            </p>
                        </div>
                        <div className="border bg-background my-3 p-1 mx-7 rounded-md w-ful">
                            <MultiSelect
                                data={['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6', 'theme-7', 'theme-8']}
                                placeholder="Select a Theme"
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
                                variant="outline"
                            />
                        </div>
                        <div className="w-full px-7 pt-4">
                            <Button
                                className="bg-primary py-4 hover:bg-orange-500/90 w-full text-white"
                                onClick={() => { activeTab === 0 ? push('/problem/create') : activeTab === 1 ? push('/innovation/create') : push('/home') }}
                            >
                                {activeTab === 0 ? "Create Problems" : activeTab === 1 ? " Create Innovations" : "Create Hackathons"}
                            </Button>
                        </div>
                    </div>
                    <div className="fixed right-0 flex flex-col gap-4 px-4 w-3/4 pt-2">
                        <div className="flex flex-row w-full gap-2 ">
                            <div className="bg-white w-full p-2 rounded-full">
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
                        <div className="flex justify-between">
                            <p className="text-xl px-2 font-bold text-gray-700 tracking-wide w-full border-t pt-3">{activeTab === 0 ? "Problems" : activeTab === 1 ? "Innovations" : "Hackathons"}</p>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="bg-white rounded-2xl p-2">
                                    <div className="flex flex-col rounded-2xl px-4 p-2">
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

                </div>
            </div>
        </div>
    )
}
