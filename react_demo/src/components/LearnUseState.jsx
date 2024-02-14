import React from 'react'
import { useState} from "react"

export const LearnUseState = () => {
    const[num,setNum] = useState(0)
    console.log(num)
    const change_num = () => {
        setNum(3);
    }

    const[pos,setPos] = useState({x:3,y:5})

    const change_set_val = () => {
        setPos({x:8,y:9});
    }

  return (
   <>


   {/* WIth Number */}
   
   <h2>My Number: {num}</h2>

   <button onClick={change_num}>Change Num</button>

   {/* With Object */}

   <h2>My Set: {pos.x}, {pos.y}</h2>

   <button onClick={change_set_val}>Change Set Val</button>
   
   </>
  )
}
