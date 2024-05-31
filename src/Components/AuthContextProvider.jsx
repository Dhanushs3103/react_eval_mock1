//Packages
import React from 'react'
import { createContext,useState } from 'react'

export let AuthContext = createContext()

export default function AuthContextProvider({children}) {
 let [isLoggedIn , setIsLoggedIn] = useState(false)

 function login () {
    setIsLoggedIn(true)
 }

 function logout () {
    setIsLoggedIn(false)
 }

 let authValues ={
    isLoggedIn,
    login,
    logout
 }
  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  )
}
