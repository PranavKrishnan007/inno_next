import React, { useEffect, useState } from "react";
import { Avatar, Button, Tabs, Textarea, TextInput } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings, IconAlertTriangle } from "@tabler/icons-react";
import ProblemCard from "@/components/Dashboard/ProblemCard";
import InnovationCard from "@/components/Dashboard/InnovationCard";
import HackathonCard from "@/components/Dashboard/HackathonCard";
import { IProblem, IHackathon, IInnovation } from "@/utils/Interfaces/coreEntity";
import { getHackathonByUser, getInnovationsByUser, getProblemsByUser } from "@/utils/Services";
import { useAuth } from "@/utils/auth";
import { IUser } from "@/utils/Interfaces";
import Branding from "@/components/branding";

export default function Dashboard(props: any) {

    const [problems, setProblems] = useState<IProblem[]>([]);
    const [hackathons, setHackathons] = useState<IHackathon[]>([]);
    const [innovations, setInnovations] = useState<IInnovation[]>([]);
    const { user } = useAuth() as { user: IUser }

    console.log(problems);
    useEffect(() => {
        getProblemsByUser(user?.id + '').then((res: IProblem[]) => {
            setProblems(res)
        })

        getInnovationsByUser(user?.id + '').then((res: IInnovation[]) => {
            setInnovations(res)
        })

        getHackathonByUser(user?.id + "").then((res: IHackathon[]) => {
            setHackathons(res)
        })
    }, [])
    return (
        <div className="h-screen overflow-y-scroll">
            <div className="sticky top-0 z-20">
                <Branding />
            </div>
            <div className="container mx-auto px-4 md:px-8 ">
                <div className="flex flex-row gap-4">
                    <div className="w-full">
                        <div className="mt-4 rounded-xl p-1 bg-gray-300/30 ">
                            <div className="w-full flex flex-row justify-between shadow-xl  rounded-lg p-10 bg-gradient-to-r from-blue-600 to-emerald-200">
                                <div className="flex flex-col">
                                    <div className="text-white text-5xl">
                                        Hello, {user?.genericuser?.firstname}!
                                    </div>
                                    <div className="text-white font-light text-lg pt-2">
                                        Welcome to Innopsi!
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <Avatar
                                        radius="xl"
                                        src={user?.avatar}
                                        style={{ width: "120px", height: "120px" }}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="bg-slate-50 border rounded-xl max-h-[70vh] overflow-auto no-scrollbar ">
                                <Tabs defaultValue="editProfile">
                                    <Tabs.List className="sticky top-0 z-10 bg-slate-100">
                                        <Tabs.Tab value="editProfile" icon={<IconPhoto size="0.8rem" />}>Edit
                                            Profile</Tabs.Tab>
                                        <Tabs.Tab value="problems" icon={<IconMessageCircle size="0.8rem" />}>Your
                                            Problems</Tabs.Tab>
                                        <Tabs.Tab value="innovations" icon={<IconSettings size="0.8rem" />}>Your
                                            Innovations</Tabs.Tab>
                                        <Tabs.Tab value="hackathons" icon={<IconSettings size="0.8rem" />}>Your
                                            Hackathons</Tabs.Tab>
                                        <Tabs.Tab value="hackathon_submissions" icon={<IconSettings size="0.8rem" />}>Your
                                            Hackathon Submissions</Tabs.Tab>
                                    </Tabs.List>
                                    <Tabs.Panel value="editProfile" pt="xs">
                                        <div className="px-8 py-4 flex flex-col w-full">
                                            <div className="text-gray-700 border-gray-300/30 border-b-2 text-3xl">
                                                Edit Profile
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Profile Picture
                                                </div>
                                                <div className="flex justify-start items-center flex-row">
                                                    <Avatar radius="xl" size="xl"
                                                        src={user?.avatar} />
                                                    <div className="flex flex-col gap-2">
                                                        <Button variant="outline" color="blue"
                                                            className="ml-4">Upload</Button>
                                                        <Button variant="outline" color="red"
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
                                            {problems.length > 0 ? problems?.map((problem: IProblem, index: number) => (
                                                <ProblemCard {...problem} key={index} />
                                            )) :
                                                <div className="text-4xl text-center p-10 w-full font-extrabold flex flex-col justify-center items-center">
                                                    <IconAlertTriangle
                                                        size={48}
                                                        strokeWidth={2}
                                                        color={'black'}
                                                    />
                                                    <div>
                                                        No Problems Submitted
                                                    </div>
                                                </div>}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="innovations" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {innovations.length > 0 ? innovations?.map((innovation: IInnovation, index: number) => (
                                                <InnovationCard {...innovation} key={index} />
                                            )) : <div className="text-4xl text-center p-10 w-full font-extrabold flex flex-col justify-center items-center">
                                                <IconAlertTriangle
                                                    size={48}
                                                    strokeWidth={2}
                                                    color={'black'}
                                                />
                                                <div>
                                                    No Innovations Submitted
                                                </div>
                                            </div>}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="hackathons" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {hackathons.length > 0 ? hackathons?.map((hackathon: IHackathon, index: number) => (
                                                <HackathonCard {...hackathon} key={index} />
                                            )) :
                                                <div className="text-4xl text-center p-10 w-full font-extrabold flex flex-col justify-center items-center">
                                                    <IconAlertTriangle
                                                        size={48}
                                                        strokeWidth={2}
                                                        color={'black'}
                                                    />
                                                    <div>
                                                        No Hackathons Created
                                                    </div>
                                                </div>}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="hackathon_submissions" pt="xs">
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {hackathons.length > 0 ? hackathons?.map((hackathon: IHackathon, index: number) => (
                                                <HackathonCard {...hackathon} key={index} />
                                            )) :
                                                <div className="text-4xl text-center p-10 w-full font-extrabold flex flex-col justify-center items-center">
                                                    <IconAlertTriangle
                                                        size={48}
                                                        strokeWidth={2}
                                                        color={'black'}
                                                    />
                                                    <div>
                                                        No Hackathon Submissions
                                                    </div>
                                                </div>}
                                        </div>
                                    </Tabs.Panel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
