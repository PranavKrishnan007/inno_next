import { useState } from 'react'
import { useAuth } from '@/utils/auth'

export default function Login () {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const { login } = useAuth() as any

  const submit = () => {
    login(
      user,
      pass
    )
  }

  return (
      <div className="flex flex-row h-screen">
          <div className="md:w-1/2 w-full bg-background h-full justify-center items-center flex flex-col">
              <div className="flex flex-col px-2 w-96">
                  <h1 className="text-white text-5xl py-2 font-semibold">Sign In</h1>
                  <div className="pb-10 text-white text-lg font-light">Welcome back! Please enter your details</div>
                  <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                          <label className="text-white ml-1 text-lg font-light">Email</label>
                          <input type="text"
                                 value={user}
                                 className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                                 placeholder="Enter your Email."
                                 onChange={(event) => { setUser(event.currentTarget.value) }}
                          />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-lg font-light ml-1 text-white">Password</label>
                          <input type="password"
                                 onChange={(event) => { setPass(event.currentTarget.value) }}
                                 value={pass}
                                 className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                                 placeholder="Enter your Password."
                          />
                          <a href="#" className="flex justify-end text-lg font-light text-hover-primary">Forgot Password?</a>
                      </div>
                  </div>
                  <div className="flex justify-center py-5 w-full">
                      <button className="bg-hover-primary text-lg font-medium text-white w-full rounded-lg p-2"
                              onClick={submit}
                      >
                          Sign In
                      </button>
                  </div>
                  <div className="flex justify-center text-white text-lg max-w-xl font-light whitespace-nowrap">Don't have an account ?<a href="/register" className="ml-1 text-hover-primary">Sign Up</a></div>
              </div>
          </div>
          <div className="w-1/2 hidden md:block bg-white h-full">
              <div className="flex items-center justify-center flex-col gap-10 h-full ">
                  <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-32 w-full object-contain place-items-center"/>
                  <img src="/assets/g20c20.png" alt="c20_logo" className="h-14 w-full object-contain"/>
              </div>
          </div>
      </div>
  )
}
