import { createInnovation, getAllInnovations } from "@/src/Services"
import { useEffect } from "react"



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
    <div>
        <div className="container mx-auto md:px-8 px-4">
            <h1 className='text-3xl font-bold underline'>Landing page comes here!</h1>
        </div>
    </div>
  )
}
