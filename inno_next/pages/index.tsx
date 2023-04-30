import { createInnovation, getAllInnovations } from "@/src/Services"
import React, { useEffect } from "react"



export default function Home() {

  const onlick = () => {

    // createInnovation({
    //   title: "test",
    //   description: "test",
    //   header_img: "test",
    //   tags: [1,2],
    //   status: "test",
    // }).then((data) => {
    //   console.log(data)
    // })
   
    getAllInnovations().then((data) => {
      console.log(data)
    })

  }
  
  return (
    <>
        <div className="absolute">
          <div className="flex justify-center m-20">
            <h2 className="flex gap-10" >
              <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-24 object-contain" />
              <img src="/assets/g20c20.png" alt="g20c20_logo" className="object-contain" />
            </h2>
          </div>
          <div className="relative z-10  xl:flex mx-auto  shadow-2xl rounded-3xl my-20 bg-gray-50 p-2  md:max-w-[80%] ">
            <img src="/assets/c20-tst-cover.jpg" alt="g20c20_logo" className="relative z-0 object-contain w-full rounded-3xl"  />
          </div>
          <div className="flex justify-center mx-auto -mt-32 bg-sky-100 h-fit " >
            <div className="xl:flex mx-auto min-h-[50vh]  my-20  py-20 px-10 md:max-w-[75%] ">
              <div className="xl:w-1/2 flex p-10 m-4 h-fit my-auto xl:bg-white  rounded-3xl">

                <img src="/assets/illustration-2.jpeg" alt="g20c20_logo" className="my-auto object-contain w-full rounded-3xl"  />
              </div>
              <div className="flex-1 p-4 my-auto text-left text-blue-950 ">
                <h1 className="text-4xl md:text-6xl font-bold mt-5 ">
                  What we do?
                </h1>
                <h4 className="text-lg md:text-xl mt-4 ">
                  Innopsi is a comprehensive platform that empowers users to seek solutions to everyday challenges
                  within the context of C20 themes. Join our community and collaborate with experts to solve your problems.
                </h4>
                <h1 className="text-4xl md:text-6xl font-bold mt-10 ">
                  Change the world!!
                </h1>
                <h4 className="text-lg md:text-xl mt-4 ">
                  Be the change you wish to see in the world. Join Innopsi and together,
                  let's create a positive impact through meaningful discussions and problem-solving.
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-auto -mt-32 bg-sky-100 h-fit">
            <div className="mx-auto min-h-[60vh] my-20 pb-10 md:max-w-[75%] border-4 border-gray-50 rounded-2xl h-fit bg-sky-200 shadow-2xl ">
              <div className="xl:flex py-20 border-b-2 border-white ">
                <div className="flex-1 pl-20 my-auto text-blue-950 text-left ">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Featured Challenges
                  </h1>
                  <h4 className="text-lg md:text-2xl mt-5 pr-6 tracking-wide">
                    Discover popular and intriguing challenges on Innopsi. Join the conversation and share your solutions
                  </h4>
                </div>
                <div className="xl:w-1/2 flex-none bg-slate-300 mt-10 rounded-2xl my-auto">
                  <img src="/assets/illustration-6.jpeg" alt="g20c20_logo" className="my-auto ml-6 object-contain w-full rounded-2xl"  />
                </div>
              </div>
              <div className="xl:flex py-20">
                <div className="xl:w-1/2 flex-none  bg-slate-300 mt-10 rounded-2xl my-auto">
                  <img src="/assets/illustration-10.jpeg" alt="g20c20_logo" className="my-auto -m-6 object-contain w-full rounded-2xl"  />
                </div>
                <div className="flex-1 px-10 my-auto text-blue-950 text-left">
                  <h1 className="text-4xl md:text-6xl font-bold  ">
                    Expert Corner
                  </h1>
                  <h4 className="text-lg md:text-2xl mt-5 ">
                    Gain insights and advice from subject matter experts. Explore solutions to complex challenges with the help of our experienced community.
                  </h4>
                </div>
              </div>
            </div>
          </div>
            <div className=" justify-center mx-auto text-center h-fit">
              <img src="/assets/illustration-3.jpeg" alt="g20c20_logo" className="my-auto h-[75vh] -m-6 object-contain w-full p- rounded-2xl"/>
              <h2 className="text-6xl font-bold  text-violet-500 ">
                Innovate. Collaborate. Solve.
              </h2>
              <p className="text-2xl mt-5">
                tackle life's challenges along with us
              </p>
            </div>
          <div className=" p-20 h-fit">
            <div className="m-10 border-b-2 border-orange-400">
              <p className="font-medium text-4xl">Stay connected</p>
              <div className="text-6xl font-bold text-orange-400 w-2/3 mt-10">
                Innovative Technology for a Better Tomorrow
              </div>
              <p className=" text-2xl my-10">Oragnization Partners</p>
                <div className="flex justify-between mx-20 ">
                  <img src="/assets/amrita-tbi.jpeg" alt="g20c20_logo" className="max-h-32 w-1/4 my-auto object-contain  "  />
                  <img src="/assets/logo-dark.png" alt="g20c20_logo" className="max-h-32 w-1/5 my-auto object-contain  "  />
                  <img src="/assets/amrita-tec.jpg" alt="g20c20_logo" className="max-h-32 w-1/6  my-auto object-contain  "  />
                </div>
            </div>
            <p className="font-bold text-4xl px-10">Innopsi</p>
          </div>
        </div>
    </>
  )
}
