import React from 'react'
import { useState,useCallback } from 'react'
import {GenerateRandomNumber} from './GenerateRandomNumber';

export const LearnUseCallback = () => {
   
   const[num,setNum] = useState(0)

   const increase_num = () => {
    setNum(num+1);
   }

    const[randomNumber,setRandomNumber] = useState(null)
    // const generateRandomNumber = () => {
    // const newrandomNum = Math.floor(Math.random() * 100);
    // setRandomNumber(newrandomNum)
    // } 


    const generateRandomNumber = useCallback(() => {
      const newrandomNum = Math.floor(Math.random() * 100);
      setRandomNumber(newrandomNum)
      },[randomNumber])
    
    
    
    return (

   <>

    

    <GenerateRandomNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber}/>
    <h1> Count: {num}</h1>
    <button onClick={increase_num}>Click Here</button>
    <hr />





   </>
     )
}
