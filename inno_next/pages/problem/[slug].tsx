import Branding from "@/components/branding";
import { IProblem } from "@/utils/Interfaces";
import {entities, getProblem} from "@/utils/Services";
import parse from 'html-react-parser';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IconAlertTriangle } from "@tabler/icons-react";
import CommentCard from "@/components/commentSection";
import {useAuth} from "@/utils/auth";

export default function Problem() {

    const router = useRouter();
    const { slug } = router.query;
    const [problem, setProblems] = useState<IProblem>({
        title: '',
        content: '',
        header_img: '',
        description: '',
        tags: []
    });
    const { user } = useAuth() as any;


    useEffect(() => {
        slug ? getProblem(slug as string).then(res => {

            setProblems(res);
        }
        ) : null;
    }, [slug])

    return (
        <div className="">
            <div className="min-h-screen container mx-auto px-4 md:px-8 relative">
                <div className="bg-white sticky flex flex-col top-0 z-50">
                    <Branding />
                </div>
                {problem ?
                    <div className="h-full py-10">
                        <div className="h-full bg-white border rounded-2xl p-10">
                            <div className="rounded-xl h-52 px-10 text-left text-5xl text-white">
                                <img src={problem.header_img} alt="problem_image" className="outline outline-gray-700/30 h-full w-full object-cover rounded-xl" />
                            </div>
                            <div className="w-full text-center py-10 font-semibold tracking-wider text-5xl">
                                {problem.title}
                            </div>
                            <div className="w-full tracking-normal text-lg px-10">
                                {problem.description}
                            </div>
                            <div className="w-full tracking-normal text-lg px-10">
                                {parse(problem.content)}
                            </div>
                            <div className=" w-full mt-4 p-4">
                                <CommentCard entityId={problem.id} entityType={entities.INNOVATION} user={user}  ></CommentCard>
                            </div>
                        </div>
                    </div> :
                    <div className="text-4xl text-center p-10 w-full h-full font-extrabold flex flex-col justify-center items-center">
                        <IconAlertTriangle
                            size={48}
                            strokeWidth={2}
                            color={'black'}
                        />
                        <div>
                            Problem Not Available
                        </div>
                    </div>}
            </div>
        </div>
    )
}
