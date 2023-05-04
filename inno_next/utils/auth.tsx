// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
// import Router, { useRouter } from 'next/router'
import { axhttp } from './Services'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { IUser } from './Interfaces'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')

      if (token) {
        const userData = JSON.parse(Cookies.get('user') as string)
        console.log("Got a token in the cookies, let's see if it is valid")
        axhttp.defaults.headers.Authorization = `Bearer ${token}`
        console.log('Got user', userData)
        if (userData) {
          setUser(userData)
          if (window.location.pathname === '/login' || window.location.pathname === '/register')
            router.push('/dashboard')
        }
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      toast.error('Email and Password are required')
      return
    }
    const res:any = await axhttp.post('/auth/local', {
      identifier: email,
      password: password,
    })

    if(res.user) {
      const user = await axhttp.get(`/users/${res.user.id}?populate=*`)
      setUser(user as unknown as IUser )
      Cookies.set('token', res.jwt)
      Cookies.set('user', JSON.stringify(user))
      axhttp.defaults.headers.common['Authorization'] = `Bearer ${res.jwt}`
      router.push('/dashboard')
    }
    
  }

  const logout = (email: string, password: string) => {
    Cookies.remove('token')
    setUser(undefined)
    delete axhttp.defaults.headers.Authorization
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
