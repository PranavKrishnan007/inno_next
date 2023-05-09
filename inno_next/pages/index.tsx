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
    <div className="absolute ">
      <div className="flex z-30 sticky top-0 justify-between bg-white shadow-md w-full px-20 py-5">
        <h2 className="flex gap-10" onClick={() => { push('/') }} >
          <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-10 p-1 object-contain" />
          <img src="/assets/g20c20.png" alt="g20c20_logo" className="h-10 p-1 object-contain" />
        </h2>
        <h2 className=" font-bold">
          <Link href='/dashboard' className="hover:text-blue-500 text-md text-gray-700">Go to dashboard</Link>
        </h2>
      </div>
      <div >
        <div className="flex justify-between px-52  pt-32" >
          <img src="/assets/vector-4.png" alt="innopsi_logo" className="relative z-0 h-20 object-contain" />
          <img src="/assets/vector-7.png" alt="g20c20_logo" className="relative z-0 h-20 object-contain" />
        </div>
        <div className="flex flex-col justify-center -mt-10 text-center gap-5 px-20  pt-10" >
          <div className=" absolute inset-0 mt-20 ">
            <img src="/assets/Ellipse%201.png" alt="g20c20_logo" className="mx-auto object-contain" />
          </div>
          <div className="relative z-20">
            <h1 className="text-7xl text-gray-800 font-extrabold">
              Transform <span className="text-orange-500">problems</span> into solutions.
            </h1>
            <h2 className='text-4xl font-light'>
              Join our community-driven platform  today!
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-10" >
          <Button onClick={() => push('/register')} className="bg-blue-500 w-1/5 hover:bg-blue-600" fullWidth size="xl" uppercase>
            Join Us
          </Button>
          <Button onClick={() => push('/login')} className="hover:text-blue-600 w-1/5 hover:bg-blue-200" fullWidth variant="outline" size="xl" uppercase>
            Login
          </Button>
        </div>
        <div className="flex justify-between my-6  px-48">
          <img src="/assets/vector-5.png" alt="innopsi_logo" className="h-48 object-contain" />
          <img src="/assets/vector-6.png" alt="g20c20_logo" className="h-48 object-contain" />
        </div>
      </div>
      <div className="xl:flex mx-auto bg-blue-950 min-h-[40vh] px-32 py-20">
        <div className="flex-1 p-4 my-auto text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold mt-5 ">
            Change <span className="text-orange-500">the</span> world!!
          </h1>
          <h4 className="text-lg md:text-xl mt-4 tracking-wide ">
            Be the change you wish to see in the world. Join Innopsi and together,
            let's create a positive impact through meaningful discussions and problem-solving.
          </h4>
          <div className="flex justify-between pt-12 pl-20" >
            <img src="/assets/vector-2.png" alt="g20c20_logo" className="h-64 object-contain" />
          </div>
        </div>
        <div className="flex p-10 m-4 h-fit my-auto  rounded-3xl">
          <img src="/assets/illustration-12.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl" />
        </div>
      </div>
      <div className="xl:flex mx-auto px-32">
        <div className="flex p-10 m-4 h-fit my-auto rounded-3xl">
          <img src="/assets/illustration-11.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-full rounded-3xl" />
        </div>
        <div className="flex-1 p-4 my-auto text-left text-blue-950">
          <h1 className="text-4xl md:text-6xl font-bold mt-5 ">
            What <span className="text-orange-500">we</span> do?
          </h1>
          <h4 className="text-lg md:text-xl mt-4 tracking-wide">
            We offer comprehensive platform that empowers users to seek solutions to everyday challenges
            within the context United Nations Sustainable Development Goals. Join our community and collaborate with experts to solve your
            problems.
          </h4>
          <div className=" mt-4 px-48 " >
            <img src="/assets/vector-1.png" alt="innopsi_logo" className="h-48 object-contain" />
          </div>
        </div>
      </div>
      <div className=" justify-center mx-auto bg-blue-950 py-20 text-white text-center h-fit">
        <h2 className="text-6xl font-bold "> 
          Ideate | Create | Empower
        </h2>
        <p className="text-2xl mt-5">
          tackle life's challenges along with us
        </p>
        <img src="/assets/vector-3.png" alt="g20c20_logo" className="my-auto h-[40vh] object-contain w-full p-10" />
      </div>
      <h4 className="text-2xl pt-20 md:text-4xl my-4 px-20 mx-auto font-bold tracking-wide text-blue-950 ">
        Glimpse of Challenges...
      </h4>
      <div className="flex flex-col px-20 mx-auto gap-3 my-6">
        {problems.map((problem, index) => (
          <ProblemCard {...problem} key={index} header_img="" tags={['something']} content={'this is the content.'} />
        ))}
        <Link href='/home' className="relative z-10 text-center hover:text-blue-500 hover:">
          view more
        </Link>
      </div>
      <div className="flex-1  mx-auto  px-32 py-12  my-auto text-left text-blue-950 ">
        <h4 className="text-2xl md:text-2xl my-4 font-bold tracking-wide">
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
      <div className="flex mx-auto bg-blue-950 p-4 mt-12 text-white px-32  my-auto text-left text-blue-950 ">
        <img src="/assets/amm-c20.png" alt="g20c20_logo" className="my-auto p-10 object-contain w-1/2 inline-flex rounded-3xl" />
        <div className="my-auto">
          <h4 className="text-xl font-medium  md:text-xl mt-4 tracking-wide ">
            Message from the Chair, C20 India 2023
            <br />
            <p className=" font-light">
              Our Inspiration
            </p>
            <br />
            <p className="text-lg font-light w-5/6">
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
      <div className="flex justify-between px-48 bg-slate-100" >
        <div className="flex justify-center text-center gap-5 px-20  align-middle py-10" >
          <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-10 object-contain my-auto" />
        </div>
        <p className="inline-block text-sm my-auto font-light align-middle">
          About Us
        </p>
        <p className='inline-block text-sm my-auto font-light align-middle'>
          Partners
        </p>
      </div>

    </div>
  );
}
