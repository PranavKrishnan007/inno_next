import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
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
   
    try {
      const res:any = await axhttp.post('/auth/local', {
        identifier: email,
        password: password,
      })
  
      if(res.user) {
        console.log(axhttp.defaults.headers)
        const user = await axhttp.get(`/users/${res.user.id}?populate=*`)
        setUser(user as unknown as IUser )
        Cookies.set('token', res.jwt)
        Cookies.set('user', JSON.stringify(user))
        axhttp.defaults.headers.common['Authorization'] = `Bearer ${res.jwt}`
        router.push('/dashboard')
      }
    }
    catch (err) {
      toast.error('Invalid Credentials')
    }
    
  }

  const logout = (email: string, password: string) => {
    setUser(undefined)
    Cookies.set('token', process.env.API_TOKEN as string)
    axhttp.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_TOKEN}`
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
