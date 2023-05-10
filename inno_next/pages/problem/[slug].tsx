import Branding from "@/components/branding";
import {IProblem, IUser} from "@/utils/Interfaces";
import {entities, getProblem} from "@/utils/Services";
import parse from 'html-react-parser';
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import CommentCard from "@/components/commentSection";
import {useAuth} from "@/utils/auth";
import {Button, Menu} from "@mantine/core";

export default function Problem() {
    const {user} = useAuth() as {user: IUser}

    const router = useRouter();
    const { slug } = router.query;
    const [problem, setProblems] = useState<IProblem>({
        title: '',
        content : '',
        header_img : '',
        description : '',
        tags :[]
    });

    useEffect( () => {
        slug ? getProblem(slug as string).then(res => {
                console.log(res)
                setProblems(res);
            }
        ) : null;
    },[slug])

    return (
        <div className=" h-full pb-20">
            <div className="sticky top-0 z-20">
                <Branding />
            </div>
            <div className="w-full text-center bg-gray-100 py-10 font-semibold tracking-wider text-5xl">
                {problem.title}
            </div>
            <div className="min-h-screen container mx-auto px-4 md:px-8 relative">
                <div className="h-full bg-white">
                    <div className="h-full py-10 border-l border-r border-b rounded-xl">
                        <div className="rounded-xl h-64 px-10 text-left text-5xl text-white">
                            <img src={problem.header_img} alt="problem_image" className="shadow-xl h-full w-full object-cover rounded-xl" />
                        </div>
                        <div className="flex items-center justify-between px-10 pt-5 pb-20 gap-10">
                            {/*<div className="text-3xl text-slate-500 ">*/}
                            {/* Vote*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/* <a href="#"*/}
                            {/* className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">*/}
                            {/* <div className="flex items-center space-x-3">*/}
                            {/* <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none"*/}
                            {/* viewBox="0 0 24 24">*/}
                            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                            {/* d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                            {/* </svg>*/}
                            {/* <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New*/}
                            {/* project</h3>*/}
                            {/* </div>*/}
                            {/* <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a*/}
                            {/* variety of starting templates.</p>*/}
                            {/* </a>*/}
                            {/*</div>*/}
                        </div>
                        <div className="w-full tracking-normal text-lg mb-20 px-10">
                            {problem.description}
                        </div>
                        <div className="w-full border-b tracking-normal text-gray-800 pb-10 text-xl px-10">
                            {parse(problem.content)}
                        </div>
                        <div className="mx-auto mt-20 bg-white px-20">
                            <CommentCard entityType={entities.PROBLEM} entityId={'1'} user={user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}