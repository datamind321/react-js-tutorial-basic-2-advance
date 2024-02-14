import React from 'react'
import {useState} from 'react'

export const CounterApp = () => {

  const[count,setCount] = useState(0)
  const inc_cnt = () => {

    // setCount(count+1);

    setCount((prevCount) => prevCount + 1)

  }

  const reset_cnt = () => {
    setCount(0);
  }
  return (
   <>
   
   <h1>Count: {count}</h1>
   <button onClick={inc_cnt}>Increase Count</button>
   <button onClick={reset_cnt}>Reset Count</button>
   
   </>
  )
}
