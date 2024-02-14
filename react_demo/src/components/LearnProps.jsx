import React from 'react'

// export const LearnProps = (props) => {
//   return (
//     <>
    
//     <h1>My Name is {props.name}</h1>
//     <h2>I am from {props.add}</h2>

    
    
//     </>
//   )
// }


// De-Structured Props 

export const LearnProps = ({name,add}) => {
    return (
      <>
      
      <h1>My Name is {name}</h1>
      <h2>I am from {add}</h2>
  
      
      
      </>
    )
  }



