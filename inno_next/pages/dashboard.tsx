import React from "react";
import {Avatar, Badge, Button, Card, Group, Image, Tabs, Textarea, TextInput} from "@mantine/core";
import {IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";

const user = "Someone";
export default function Dashboard() {
    const PROBLEM = [
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. asldfkajfja ldkfj klasj fdl jaksldfj lkasj dflkas jdf kas jfdljsakdfj lkasj fklasdjlfkja skldf jlaskjfla slfdj ksa fjlsaj dkfl jaslfj klasj fklsajfls djfl asjkfj asklfdj laks jdfklasjfl asjd flask fjlka sjfklasj klf jaskldfj klas jdfklasj dkflj asklf jsdlfk jasklf jaklsfj asklf jlasfj klasf jklas fjsaj dflajkljflas dfjklas flas I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
        {
            title: 'How to make a website?',
            description: 'I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me? I want to make a website for my business. I have no idea how to start. Can someone help me?',
            image: "/assets/placeholder.jpeg"
        },
    ]

    return (
        <div className="bg-background h-screen overflow-y-scroll">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-row justify-center items-center p-10 gap-6">
                    <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain"/>
                    <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain"/>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-3/4">
                        <div className="bg-white rounded-xl p-1">
                            <div
                                className="w-full flex flex-row rounded-lg p-10 bg-gradient-to-r from-blue-600 to-emerald-200">
                                <div className="flex flex-col">
                                    <div className="text-white text-5xl">
                                        Hello, {user}
                                    </div>
                                    <div className="text-white font-light text-lg pt-2">
                                        Welcome to Innopsi!
                                    </div>
                                </div>
                                <div className="float-right">
                                    Space for image
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
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
                                            <div className="text-gray-700 border-gray-300/30 border-b-2 text-3xl">
                                                Edit Profile
                                            </div>
                                            <div>
                                                <div className="pt-5 text-gray-500 font-medium pb-1">
                                                    Profile Picture
                                                </div>
                                                <div className="flex justify-start items-center flex-row">
                                                    <Avatar radius="xl" size="xl"
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"/>
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
                                        Messages tab content
                                        <div className="px-8 py-4 flex flex-col gap-3  w-full">
                                            {PROBLEM.map((problem) => (
                                                <Card className="flex gap-2" shadow="sm" padding="lg" radius="md"
                                                      withBorder>
                                                    <div className="min-w-max">
                                                        <Image
                                                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                                            // src={problem.image}
                                                            height="160"
                                                            alt="Norway"
                                                            radius="md"
                                                        />
                                                    </div>
                                                    <div className="ml-10">
                                                        <Group position="apart" mt="md" mb="xs">
                                                            <h2 className="font-bold text-xl">{problem.title}</h2>
                                                            <Badge color="pink" variant="light">
                                                                12
                                                            </Badge>
                                                        </Group>
                                                        <div className="max-w-full text-md text-gray-600">
                                                            {problem.description}
                                                        </div>

                                                        <Button variant="light" color="blue" mt="md" radius="md">
                                                            Go to problem
                                                        </Button>
                                                        <div className="flex gap-2 mt-2">
                                                            <Badge color="orange" variant="light">
                                                                Tag 1
                                                            </Badge>
                                                            <Badge color="red" variant="light">
                                                                Second
                                                            </Badge>
                                                            <Badge color="orange" variant="light">
                                                                Third
                                                            </Badge>
                                                            <Badge color="blue" variant="light">
                                                                Fourth
                                                            </Badge>

                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="innovations" pt="xs">
                                        Settings tab content
                                    </Tabs.Panel>

                                    <Tabs.Panel value="hackathons" pt="xs">
                                        Settings tab content
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