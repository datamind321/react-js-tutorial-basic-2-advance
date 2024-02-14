import React from 'react'
import { useState } from 'react' 




export const LearnConditionalRendering = () => {
  const status = true
  const[isLogin,setIsLogin] = useState(false)
  return (
    <>
    {status && <h1>DataqMind</h1>}

    {isLogin ? (<><h1>Home Page</h1> 
                <button onClick={() => setIsLogin(false)}>LogOut</button>
               </>) : (<><h1>LogIn Page</h1>
               <button onClick={() => setIsLogin(true)}>Login</button></>)}
    </>
  )
}
