import React, { useMemo } from 'react'
import {useState} from 'react'
export const LearnUseMemo = () => {

  const[count,setCount] = useState(0)
  const handleCount = () => {
    console.log("Increase Count Function Called...")
    setCount(count + 1)
  }

  const[randomNum,setRandomNum] = useState(null)
  const genRandomNum = () => {
  const newRandomNum = Math.floor(Math.random() * 100) + 1;
  setRandomNum(newRandomNum);
  };

//   const isCountTen = () => {
//     console.log('IsCountTen Called....');
//     if(count === 10) {
        
//         return "Yes"
//     }
  
//         return "No"

//   }

const isCountTen = useMemo(() => {
    console.log('IsCountTen Called....');
    if(count === 10) {
        
        return "Yes"
    }
  
        return "No"

  },[count])






  return (
   <>
   {/* <h2>is  {count} equal to 10? --- {isCountTen()}</h2> */}
   <h2>is  {count} equal to 10? --- {isCountTen}</h2>
    <button onClick={handleCount}>Increase Count</button>
    <hr />
    <h2>Random Number: {randomNum}</h2>
    <button onClick={genRandomNum}>Generate Random Number</button>
   
   </>
  )
}
