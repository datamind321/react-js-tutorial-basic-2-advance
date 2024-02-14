import React from 'react'
import { useCustomCounter } from '../Hooks/useCustomCounter'



export const LearnCustomHook = () => {
const {count,handleInc} = useCustomCounter()
  return (
  <>

  <h1>Count: {count}</h1>
  <button onClick={handleInc}>Click Me</button>
  
  </>
  )
}
