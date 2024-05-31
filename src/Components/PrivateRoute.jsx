//packages
import React from 'react'
import { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// local imports
import { AuthContext } from './AuthContextProvider'


export default function PrivateRoute({children}) {
    let {isLoggedIn} = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(()=>{
        if(!isLoggedIn) {
            navigate(`/login`);
        }
    },[isLoggedIn,navigate])
    
  return (
    <>
      {children}
    </>
  )
}
