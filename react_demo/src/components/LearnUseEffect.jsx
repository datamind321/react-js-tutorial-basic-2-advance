import React, { useEffect } from 'react'
import {useState} from 'react'




export const LearnUseEffect = () => {
  const[count,setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }

  const[randomNum,setRandomNum] = useState(null)
  const genRandomNum = () => {
  const newRandomNum = Math.floor(Math.random() * 100) + 1;
  setRandomNum(newRandomNum);
  }

// Ex.1 Use This Effect Every Time When Render It

//   useEffect(()=> {
//     console.log('UseEffect Called');
//   })

// Ex.2 Use This Effect Only One Time When Render It

//   useEffect(()=> {
//     console.log('UseEffect Called');
//   },[])


// Ex.3 Use This Effect When Dependency Changed


//   useEffect(()=> {
//     console.log('UseEffect Called');
//   },[count])


  // Ex.4 Cleanup Function When Componet un-mount


  useEffect(()=> {
    console.log('UseEffect Called');
    return () => {
        console.log('Component Will unmount !')
    }
  },[count])






  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={handleCount}> Cnt</button>
    <hr />
    <h2>Random Number: {randomNum}</h2>
    <button onClick={genRandomNum}>Inc Cnt</button>


    </>
  )
}
