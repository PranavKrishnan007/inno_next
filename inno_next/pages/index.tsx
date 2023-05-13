import React from "react";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProblemCard from "@/components/Dashboard/ProblemCard";

const problems = [{
  title: 'Developing a Haptic Technology-based Skill Development Program ',
  description: 'Skill development is crucial for the growth and development of individuals and communities.' +
    ' However, traditional skill development programs often face challenges such as lack of access,' +
    ' low participation rates, and limited feedback mechanisms. The use of haptic technology in skill ' +
    'development programs has the potential to enhance the learning experience and improve the effectiveness of the program...',
  tag1: 'Haptic Technology',
  tag2: 'Smart Learning',
  tag3: 'Skill Development',
  src: '/assets/haptic .jpeg',
  votes: '230 '
},
{
  title: 'Developing Coir Fibre for Sustainable Cooling Systems',
  description: 'The use of conventional refrigeration systems for cooling contributes significantly to global' +
    ' warming and is unsustainable. Coir fibre is a natural, renewable material that has shown promise as a' +
    ' sustainable alternative for cooling systems. Coir fibre has excellent moisture absorption properties and ' +
    'can be used to regulate temperature and humidity. ',
  tag1: 'Eco-friendly Cooling',
  tag2: 'Coir Fibre',
  tag3: 'Sustainability',
  src: '/assets/coir.jpeg',
  votes: '845 '

},
{
  title: 'Developing an IoT Room for the Elderly',
  description: ' As the population ages, there is a growing need for smart technologies ' +
    'that can enhance the quality of life of the elderly. One of the key challenges faced by' +
    ' the elderly is a loss of independence due to physical and cognitive limitations. Smart technologies,' +
    ' such as the Internet of Things (IoT), can play a significant role in addressing these challenges and' +
    ' improving the quality of life for the elderly. ',
  tag1: 'Smart IoT',
  tag2: 'Elderly Care',
  tag3: 'Health Care',
  src: '/assets/iot.jpeg',
  votes: '430 '

},
]
export default function Home() {
  const { push } = useRouter();

  return (
    <div className="absolute">
      <div className="flex z-30 relative top-0  justify-between  w-full px-4 md:px-20 py-4">
        <h2 className="flex gap-10" onClick={() => { push('/') }} >
          <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-10  md:h-14  p-1  object-contain" />
          <img src="/assets/g20c20.png" alt="g20c20_logo" className="h-10  md:h-14 p-1 object-contain" />
        </h2>
        <div className="font-extrabold h-full pt-2">
          <Link href='/dashboard' className="hover:text-blue-500 h-full text-md md:text-xl text-gray-600">Go to dashboard</Link>
        </div>
      </div>
      <div>
        <div className="relative top-0 z-20 -mt-24">
          <svg className="w-full h-152  fill-amber-200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25" className="shape-fill"></path>
            <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5" className="shape-fill"></path>
            <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"></path>
          </svg>
        </div>
        <div className="flex justify-between px-52 pt-32" >
          <img src="/assets/vector-4.png" alt="innopsi_logo" className="relative z-0 h-20 object-contain hidden md:block" />
          <img src="/assets/vector-7.png" alt="g20c20_logo" className="relative z-0 h-20 object-contain hidden md:block" />
        </div>
        <div className="flex flex-col justify-center -mt-10 text-center gap-5 px-20  pt-10" >
          <div className="absolute inset-0 mt-40">
            <img src="/assets/Ellipse%201.png" alt="g20c20_logo" className="mx-auto object-contain" />
          </div>
          <div className="relative z-20 flex flex-col gap-4">
            <h1 className="text-7xl text-gray-800 font-extrabold">
              Transform <span className="text-orange-500">problems</span> into solutions.
            </h1>
            <h2 className='text-4xl font-light'>
              Join our community-driven platform  today!
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-10" >
          <Button onClick={() => push('/register')} className="bg-blue-500 w-1/5 hover:bg-blue-600" fullWidth size="xl" uppercase>
            Join Us
          </Button>
          <Button onClick={() => push('/login')} className="hover:text-blue-600 w-1/5 hover:bg-blue-200" fullWidth variant="outline" size="xl" uppercase>
            Login
          </Button>
        </div>
        <div className="w-full hidden md:block">
          <div className="flex justify-between my-6 px-48">
            <img src="/assets/vector-5.png" alt="innopsi_logo" className="h-48 object-contain" />
            <img src="/assets/vector-6.png" alt="g20c20_logo" className="h-48 object-contain" />
          </div>
        </div>
        <div>
          <svg className="w-full h-152 transform rotate-180 fill-blue-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25" className="shape-fill text-blue-700"></path>
            <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5" className="shape-fill text-blue-700"></path>
            <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill text-blue-700"></path>
          </svg>
        </div>
      </div>
      <div className="xl:flex mx-auto bg-blue-950 min-h-[40vh] px-8 md:px-32 py-20 -mt-2 ">
        <div className="flex-1 p-4 my-auto text-white text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold  ">
            Change <span className="text-orange-500">the</span> world!!
          </h1>
          <h4 className="text-xl mt-4 tracking-wide ">
            Be the change you wish to see in the world. Join Innopsi and together,
            let's create a positive impact through meaningful discussions and problem-solving.
          </h4>
          <div className="hidden md:block">
            <div className="flex justify-between pt-12 pl-20" >
              <img src="/assets/vector-2.png" alt="g20c20_logo" className="h-64 object-contain" />
            </div>
          </div>
        </div>
        <div className="flex p-10 m-4 h-fit my-auto  rounded-3xl">
          <img src="/assets/illustration-12.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl" />
        </div>
      </div>
      <div className="relative top-0 z-20 -mt-2">
        <svg className="w-full h-152 fill-blue-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="shape-fill"></path>
          <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5" className="shape-fill"></path>
          <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"></path>
        </svg>
      </div>
      <div className="xl:flex mx-auto px-8 md:px-32">
        <div className="flex p-10 m-4 h-fit my-auto rounded-3xl">
          <img src="/assets/illustration-11.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl" />
        </div>
        <div className="flex-1 md:p-4 my-auto pb-14 md:pb-0 text-center md:text-left text-blue-950">
          <h1 className="text-5xl md:text-6xl font-bold mt-5 ">
            What <span className="text-orange-500">we</span> do?
          </h1>
          <h4 className="text-xl mt-4 tracking-wide">
            We offer comprehensive platform that empowers users to seek solutions to everyday challenges
            within the context United Nations Sustainable Development Goals. Join our community and collaborate with experts to solve your
            problems.
          </h4>
          <div className="mt-4 px-48 hidden md:block">
            <img src="/assets/vector-1.png" alt="innopsi_logo" className="h-48 object-contain" />
          </div>
        </div>
      </div>
      <div>
        <svg className="w-full h-152 transform rotate-180 fill-blue-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="shape-fill text-blue-700"></path>
          <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5" className="shape-fill text-blue-700"></path>
          <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill text-blue-700"></path>
        </svg>
      </div>
      <div className=" justify-center mx-auto bg-blue-950 py-20 -mt-2 text-white text-center h-fit">
        <h2 className="md:text-6xl text-4xl font-bold ">
          Ideate | Create | Empower
        </h2>
        <p className="text-2xl mt-5">
          tackle life's challenges along with us
        </p>
        <img src="/assets/vector-3.png" alt="g20c20_logo" className="my-auto h-[40vh] object-contain w-full p-10" />
      </div>
      <div className="bg-gray-900 relative top-0 z-20 -mt-2 ">
        <svg className="w-full h-152  fill-blue-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="shape-fill"></path>
          <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5" className="shape-fill"></path>
          <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"></path>
        </svg>
      </div>
      <div className="flex-1 mx-auto bg-gray-900  md:px-32 px-8 -mt-10 py-24 text-center md:text-left text-gray-100 ">
        <h4 className="text-5xl my-4 font-bold tracking-wide">
          Our Mission
        </h4>
        <h4 className="text-lg md:text-xl mt-4 tracking-wide ">
          INNOPSI is a social innovation platform addressing societal challenges by
          bringing together diverse perspectives, fostering collaboration, and supporting stakeholders.
          We believe that social innovation is critical to creating a more equitable and sustainable world.
          We support and empower social innovators by providing them with the tools, resources, and connections
          they need to make a societal impact.
        </h4>
      </div>
      <div   className="bg-gray-900 -mt-2" >
        <svg className="w-full h-152 transform rotate-180 fill-blue-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="shape-fill text-blue-700"></path>
          <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5" className="shape-fill text-blue-700"></path>
          <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill text-blue-700"></path>
        </svg>
      </div>
      <div className="flex flex-col md:flex-row mx-auto bg-blue-950 p-4 -mt-2 text-white  md:px-32  px-8 pb-16 md:pb-0 my-auto text-left  ">
        <img src="/assets/amm-c20.png" alt="g20c20_logo" className="my-auto p-10 object-contain md:w-1/2 inline-flex rounded-3xl" />
        <div className="my-auto">
          <h4 className="text-3xl font-semibold  md:text-xl mt-4 tracking-wide ">
            Message from the Chair, C20 India 2023
            <br />
            <p className="mt-2 font-medium">
              Our Inspiration
            </p>
            <br />
            <p className="text-xl font-light md:w-5/6">
              Knowledge is like a river. Its nature is to flow to all corners of the world and nourish the culture there.
              By sharing knowledge and experiences, we can prevent the beautiful flower that is this world from wilting.
              By bringing together diverse streams of knowledge, we can create a magnificent river. May this great river
              of knowledge flow to caress the countries and communities of the world. May it overflow the borders between
              people and countries. May it impart the water of life to all of humanity, and thus nurture the blooming of
              culture throughout the world.
            </p>
            <br />
            Amma,
            <br />
            Sri Mata Amritanandamayi Devi
          </h4>
        </div>
      </div>
    </div>
  );
}
