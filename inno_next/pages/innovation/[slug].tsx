import Branding from "@/components/branding";
import parse from 'html-react-parser';

const innovation = {
  title: "Innovation Title",
  url: "/assets/amrita-tec.jpg",
  description: "<p>Innovations somethings</p>"
};

export default function Innovation() {
  return (
    <div className="">
      <div className="min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative">
        <div className="bg-white sticky flex flex-col top-0 z-50">
          <Branding />
        </div>
        <div className="h-screen py-10">
          <div className="h-full bg-white border rounded-2xl p-10">
            <div className="rounded-xl h-52 px-10 text-left text-5xl text-white">
              <img src={innovation.url} alt="problem_image" className="outline outline-gray-700/30 h-full w-full object-cover rounded-xl" />
            </div>
            <div className="w-full text-center py-10 font-semibold tracking-wider text-5xl">
              {innovation.title}
            </div>
            <div className="w-full justify-center tracking-normal text-lg px-10">
              {parse(innovation.description)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
