import React, { useEffect, useState } from "react";
import {Avatar, Button,Tabs, Textarea, TextInput} from "@mantine/core";
import {IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";
import ProblemCard from "@/components/Dashboard/ProblemCard";
import InnovationCard from "@/components/Dashboard/InnovationCard";
import HackathonCard from "@/components/Dashboard/HackathonCard";
import { IProblem, IHackathon, IInnovation } from "@/utils/Interfaces/coreEntity";
import { getAllProblems, getAllInnovations, getAllHackathons } from "@/utils/Services";
import { useAuth } from "@/utils/auth";

// const user = "Someone"; 
export default function Dashboard( props :any) {

    const [problems, setProblems] = useState<IProblem[]>([]);
    const [hackathons, setHackathons] = useState<IHackathon[]>([]);
    const [innovations, setInnovations] = useState<IInnovation[]>([]);
    const { user } = useAuth();

    useEffect(() => {
            getAllProblems().then((res:IProblem[]) => {
                setProblems(res)
            })

            getAllInnovations().then((res:IInnovation[]) => {
                setInnovations(res)
            })
            
            getAllHackathons().then((res:IHackathon[]) => {
                setHackathons(res)
            })
    }, [])

    return (
        <div className=" h-screen overflow-y-scroll">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-row justify-center items-center p-10 gap-6">
                    <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain"/>
                    <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain"/>
                </div>
                <div className="flex flex-row gap-4 ">
                    <div className="w-3/4">
                        <div className="bg-white rounded-xl bg-gray-300/20 p-2">
                            <div
                                className="w-full flex flex-row  rounded-lg p-10 bg-gradient-to-r from-blue-600 to-emerald-200">
                                <div className="flex flex-col">
                                    <div className="text-white font-bold text-5xl">
                                        Hello, {user}
                                    </div>
                                    <div className="text-white font-medium text-lg pt-2">
                                        Welcome to Innopsi!
                                    </div>
                                </div>
                                <div className="float-right ml-10 text-white">
                                    Space for image
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 border mt-2 rounded-2xl">
                            <div className="bg-white rounded-xl p-2">
                                <Tabs defaultValue="editProfile">
                                    <Tabs.List>
                                        <Tabs.Tab value="editProfile" icon={<IconPhoto size="0.8rem"/>}>Edit
                                            Profile</Tabs.Tab>
                                        <Tabs.Tab value="problems" icon={<IconMessageCircle size="0.8rem"/>}>Your
                                            Problems</Tabs.Tab>
                                        <Tabs.Tab value="innovations" icon={<IconSettings size="0.8rem"/>}>Your
                                            Innovations</Tabs.Tab>
                                        <Tabs.Tab value="hackathons" icon={<IconSettings size="0.8rem"/>}>Your
                                            Hackathons</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="editProfile" pt="xs">
                                        <div className="px-8 py-4 flex flex-col w-full">
                                            <div className="text-gray-700 font-bold border-gray-300/30 border-b-2 mb-2 text-3xl">
                                                Edit Profile
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Profile Picture
                                                </div>
                                                <div className="flex justify-start items-center flex-row">
                                                    <Avatar radius="xl" size="lg" className="w-40 h-40 rounded-full shadow-xl"
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"/>
                                                    <div className="flex flex-col  gap-2">
                                                        <Button variant="outline" color="blue" fullWidth
                                                                className="ml-4">Upload</Button>
                                                        <Button variant="outline" color="red" fullWidth
                                                                className="ml-4">Delete</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Name
                                                </div>
                                                <TextInput
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Password
                                                </div>
                                                <TextInput
                                                    placeholder="Password"
                                                    type="password"
                                                />
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Confirm Password
                                                </div>
                                                <TextInput
                                                    placeholder="Password"
                                                    type="password"
                                                />
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Address
                                                </div>
                                                <Textarea
                                                    placeholder="Your comment"
                                                    autosize
                                                    maxRows={4}
                                                />
                                            </div>
                                            <div className="flex justify-start items-start pt-5">
                                                <Button variant="outline" color="blue">Save</Button>
                                            </div>
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="problems" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {problems.map((problem:IProblem, index:number) => (
                                                <ProblemCard {...problem} key={index}/>
                                            ))}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="innovations" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {innovations.map((innovation:IInnovation, index:number) => (
                                                <InnovationCard {...innovation} key={index}/>
                                            ))}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="hackathons" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {hackathons.map((hackathon:IHackathon, index:number) => (
                                                <HackathonCard {...hackathon} key={index}/>
                                            ))}
                                        </div>
                                    </Tabs.Panel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col">
                        <div className="bg-white rounded-xl p-2">
                            <div
                                className="bg-gray-300/30 rounded-xl p-2 flex justify-center items-center text-gray-500">
                                Notifications
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
