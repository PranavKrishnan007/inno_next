// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
// import Router, { useRouter } from 'next/router'
import { axhttp } from './Services';



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            const userData = JSON.parse( Cookies.get('user') as string )
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                axhttp.defaults.headers.Authorization = `Bearer ${token}`
                // const { data: user } = await axhttp.get('/auth/me')
                console.log("Got user", userData)
                if (userData) setUser(userData);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (email:string, password:string) => {
        const { data: token } = await axhttp.post('auth/login', { email, password })
        if (token) {
            Cookies.set('token', token, { expires: 60 })
            axhttp.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await axhttp.get('/auth/me')
            setUser(user)
            console.log("Got user", user)
        }
    }

    const logout = (email:string, password:string) => {
        Cookies.remove('token')
        setUser(null)
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