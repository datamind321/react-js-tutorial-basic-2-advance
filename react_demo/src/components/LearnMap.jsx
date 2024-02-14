import React from 'react'

export const LearnMap = () => {
    const items = ['apple','mango','banana'];
  return (
   <>
   <ul>
    {items.map((item,i) => (
        <li key={i}>{i} ---- {item}</li>
    ))}
   </ul>
   </>
  )
}
