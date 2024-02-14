import React from 'react'

export const LearnEvent = () => {
const handler = (e) => {
    e.preventDefault()
    console.log('Button Clicked')
    document.querySelector('button').innerHTML="Button Clicked !"
}

const handler2 = (myid) => {
   
    console.log('Button Clicked 2',myid)
    document.querySelector('button').innerHTML="Button Clicked !"
}
  return (
   <>
   
   {/* Without Arguments */}
   <button onClick={handler}>Click Me</button>

    {/* With Arguments */}

    <button onClick={(e) => handler2('GE234')}>Click me</button>
   
   </>
  )
}
