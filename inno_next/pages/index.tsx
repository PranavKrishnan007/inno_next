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
    <>
      <h1 className='text-3xl font-bold underline'>
        {/* testing api pages */}

        <button className="btn btn-primary " onClick={onlick} >testFunctions</button>
      </h1>
    </>
  )
}
