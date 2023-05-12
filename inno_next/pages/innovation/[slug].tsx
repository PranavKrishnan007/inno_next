import Branding from "@/components/branding";
import { IInnovation } from "@/utils/Interfaces";
import { entities, getInnovation } from "@/utils/Services";
import parse from 'html-react-parser';
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import CommentCard from "@/components/commentSection";
import { useAuth } from "@/utils/auth";


export default function Innovation() {
  const router = useRouter();
  const { slug } = router.query;
  const [innovation, setInnovation] = useState<IInnovation>({
    id: 1,
    title: '',
    content : '',
    header_img : '',
    description : ''
  });
  const {user} = useAuth() as any;

  useLayoutEffect( () => {
    slug ? getInnovation(slug as string).then(res => {
      setInnovation({
        id : res.id,
        title : res.title,
        content : res.content,
        header_img : res.header_img,
        description :  res.description
      });
    }
    ) : null;
  }, [slug])


  return (
    <div className="">
      <div className="absolute w-full flex flex-col top-0 z-50">
        <Branding />
      </div>
      {
        innovation && (
          <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
        <div className="h-screen py-10">
          <div className="h-full bg-white border rounded-2xl p-10">
            <div className="rounded-xl h-52 px-10 text-left text-5xl text-white">
              <img src={innovation.header_img} alt="problem_image" className="outline outline-gray-700/30 h-full w-full object-cover rounded-xl" />
            </div>
            <div className="w-full text-center py-10 font-semibold tracking-wider text-5xl">
              {innovation.title}
            </div>
            <div className="w-full justify-center tracking-normal text-lg px-10">
              {parse(innovation.description)}
            </div>
           
          </div>
          <div className="bg-gray-100 w-full mt-4 p-4">
          <CommentCard entityId={innovation.id} entityType={entities.INNOVATION} user={user}  ></CommentCard>
            </div>
        </div>
        
      </div>
        )
      }
      
    </div>
  )
}
