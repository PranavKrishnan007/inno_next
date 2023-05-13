import Branding from '@/components/branding'
import { IHackathon } from '@/utils/Interfaces'
import { entities, getHackathon, registerForHackathon } from '@/utils/Services'
import { Image } from '@mantine/core'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useAuth } from '@/utils/auth'
import { IStrapiServerData } from '@/utils/Interfaces/coreEntity'
import { toast } from 'react-toastify'
import CommentCard from '@/components/commentSection'

export default function Hackathon() {
  const router = useRouter()
  const { slug } = router.query
  const { user } = useAuth() as any

  const [hackathon, setHackathon] = useState<IHackathon>({
    id: 1,
    title: 'The Ultimate hackathon',
    description: 'this brings together the best of the best',
    header_img:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    applicationCloseDate: new Date('2023-05-09T20:09:36.674Z'),
    applicationOpenDate: new Date('2023-05-09T20:09:36.674Z'),
    hackathonEndDate: new Date('2023-05-09T20:09:36.674Z'),
    hackathonStartDate: new Date('2023-05-09T20:09:36.674Z'),
    partcipantLimit: 10,
    tagline: 'The Ultimate hackathon',
    additionalDetails: 'The Ultimate hackathon',
    contactDetails: 'The Ultimate hackathon',
  })

  const [isRegister, setIsRegister] = useState(false)
  useEffect(() => {
    slug &&
      getHackathon(slug as string).then((res) => {
        if (!res?.participants) return
        res.participants.data.find((participant: IStrapiServerData) => {
          if (participant.id == user.id) {
            setIsRegister(true)
          }
        })
        res && setHackathon(res as IHackathon)
      })
  }, [slug])

  const register = () => {
    registerForHackathon(hackathon.id + '', user.id).then((res: IStrapiServerData) => {
      toast.success('Successfully registered for hackathon')
      setIsRegister(true)
    })
  }

  return (
    <div>
      <div className='bg-white sticky flex w-full top-0 z-50'>
        <Branding />
      </div>
      <div className="flex justify-center sticky  px-20 text-center  text-gray-700 py-10 bg-gray-100">
        <h1 className='text-5xl font-bold  md:my-3'>{hackathon.title}</h1>
      </div>
      <div className="w-full ">
      <div className='min-h-screen container mx-auto px-4 md:px-8 md:py-10 relative'>
        <div>
          <div className='flex flex-col  container mt-10 rounded-xl'>
            <div className='justify-center flex flex-col w-full bg-slate-100 rounded-lg shadow-md   p-2  mx-auto my-5 '>
              <Image
                  src={hackathon.header_img}
                  height='250'
                  width='100%'
                  alt='Norway'
                  radius="sm"
              />
            </div>
            <h3 className='text-3xl font-bold px-3 py-4 text-gray-600'>{hackathon.tagline}</h3>

            <div className='flex flex-col w-1/2 '>
              <div className='p-4 bg-slate-100 rounded-lg shadow-md'>
                <div className='my-4 px-3 text-3xl font-bold text-slate-500 py-4 /2 bg-gray-200/50 rounded-lg shadow-md'>
                  <div>
                    Dates: {hackathon.hackathonStartDate.toDateString()} -{' '}
                    {hackathon.hackathonEndDate.toDateString()}
                  </div>
                  <div>Applications close on: {hackathon.applicationCloseDate.toDateString()}</div>
                </div>
                <div className="my-4 px-3 text-3xl font-bold text-slate-500 py-4 rounded-lg w-1/2 bg-gray-200/50 shadow-md">Number of Teams:{hackathon.partcipantLimit}</div>
                {!isRegister ? (
                  <button
                    onClick={() => register()}
                    disabled={!user}
                    className='btn mx-1 text-xl font-semibold bg-orange-500 w-min text-white py-2 px-5 rounded-lg'
                  >
                    Register
                  </button>
                ) : (
                  <button
                    onClick={() => register()}
                    disabled={true}
                    className='btn mx-1 text-xl font-semibold bg-gray-500 w-min text-white py-2 px-5 rounded-lg'
                  >
                    Registered
                  </button>
                )}
              </div>
            </div>
            <div className=' my-5 tracking-wide text-justify text-gray-700 text-xl md:my-7'>
              <p className="border-b px-3 py-4" > {hackathon.description} </p>
              <div className="bg-slate-100 p-6 mt-10 shadow-md  rounded-lg">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes f
              rom a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by H. Rackham.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              Whre does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."
              , comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by H. Rackham.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s
              crambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
              " (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..
              ", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
              {parse(hackathon.additionalDetails)}
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 shadow-lg rounded-md">
          <CommentCard entityId={hackathon.id} entityType={entities.HACKATHON} user={user}  ></CommentCard>
        </div>
      </div>
      </div>
    </div>
  )
}
