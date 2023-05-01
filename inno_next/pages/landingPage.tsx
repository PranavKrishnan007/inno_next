import React from "react";
import {Button} from "@mantine/core";
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function LandingPage(){
    const {push} = useRouter();

    return(
      <div className="absolute">
          <div className="flex justify-between mx-20 mt-6 ">
              <h2 className="flex gap-10" >
                  <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-10 object-contain" />
                  <img src="/assets/g20c20.png" alt="g20c20_logo" className="h-10 object-contain" />
              </h2>
              <h2 className=" font-bold">
                  <Link href='/dashboard' className="hover:text-blue-500">Go to dashboard</Link>
              </h2>
          </div>
          <div >
              <div className="flex justify-between px-52  pt-32" >
                  <img src="/assets/vector-4.png" alt="innopsi_logo" className="relative z-0 h-20 object-contain" />
                  <img src="/assets/vector-7.png" alt="g20c20_logo" className= "relative z-0 h-20 object-contain" />
              </div>
              <div className="flex flex-col justify-center -mt-10 text-center gap-5 px-20  pt-10" >
                  <div className=" absolute inset-0 mt-20 ">
                      <img src="/assets/Ellipse%201.png" alt="g20c20_logo" className= "mx-auto object-contain" />
                  </div>
                  <div className="relative z-20">
                      <h1 className="text-6xl font-bold">
                          “Transform <span className="text-orange-500">problems</span> into solutions.
                      </h1>
                      <h2 className='text-4xl font-light'>
                          Join our community-driven platform  today!
                      </h2>
                  </div>
              </div>
              <div className="flex justify-center mt-10 gap-10" >
                  <Button  onClick={() => push('/register')} className="bg-blue-500 w-1/5 hover:bg-blue-600" fullWidth size="xl" uppercase>
                      Join Us
                  </Button>
                  <Button onClick={() => push('/login')} className="hover:text-white w-1/5 hover:bg-blue-600" fullWidth  variant="outline" size="xl" uppercase>
                      Login
                  </Button>
              </div>
              <div className=" flex justify-between mt-4 px-48 " >
                  <img src="/assets/vector-5.png" alt="innopsi_logo" className="h-48 object-contain" />
                  <img src="/assets/vector-6.png" alt="g20c20_logo" className="h-48 object-contain" />
              </div>
          </div>
          <div className="xl:flex mx-auto min-h-[50vh] py-20 px-10 md:max-w-[90%] ">
              <div className="flex-1 p-4 my-auto text-left text-blue-950 ">
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 ">
                      What <span className="text-orange-500">we</span> do?
                  </h1>
                  <h4 className="text-lg md:text-xl mt-4 tracking-wide ">
                      We offer comprehensive platform that empowers users to seek solutions to everyday challenges
                      within the context of C20 themes. Join our community and collaborate with experts to solve your
                      problems.
                  </h4>
                  <div className=" flex justify-between mt-6 pl-20" >
                      <img src="/assets/vector-2.png" alt="g20c20_logo" className="h-64 object-contain" />
                  </div>
              </div>
              <div className="xl:w-1/2 flex p-10 m-4 h-fit my-auto xl:bg-white  rounded-3xl">
                  <img src="/assets/illustration-12.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl"  />
              </div>
          </div>
          <div className="xl:flex mx-auto min-h-[50vh]  px-10 md:max-w-[90%] ">
              <div className="xl:w-1/2 flex p-10 m-4 h-fit my-auto xl:bg-white  rounded-3xl">
                  <img src="/assets/illustration-11.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl"  />
              </div>
              <div className="flex-1 p-4 my-auto text-left text-blue-950 ">
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 ">
                      Change <span className="text-orange-500">the</span> world!!
                  </h1>
                  <h4 className="text-lg md:text-xl mt-4 tracking-wide ">
                      Be the change you wish to see in the world. Join Innopsi and together,
                      let's create a positive impact through meaningful discussions and problem-solving.
                  </h4>
                  <div className=" mt-4 px-48 " >
                      <img src="/assets/vector-1.png" alt="innopsi_logo" className="h-48 object-contain" />
                  </div>
              </div>
          </div>
          <div className=" justify-center mx-auto text-center h-fit">
              <h2 className="text-6xl font-bold ">
                  Innovate. Collaborate. Solve.
              </h2>
              <p className="text-2xl mt-5">
                  tackle life's challenges along with us
              </p>
              <img src="/assets/vector-3.png" alt="g20c20_logo" className="my-auto h-[50vh] object-contain w-full p-10 rounded-2xl"/>
          </div>
          <div className="flex justify-between px-48 mt-20 bg-slate-100" >
              <div className="flex justify-center text-center gap-5 px-20  align-middle py-10" >
                <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-10 object-contain my-auto" />
                  <p className="inline-block text-sm font-light align-middle">
                      About Us
                  </p>
                  <p className='inline-block text-sm font-light align-middle'>
                      Partners
                  </p>
              </div>
          </div>

      </div>
    );
}