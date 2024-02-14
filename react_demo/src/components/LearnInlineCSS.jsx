import React from 'react'

export const LearnInlineCSS = () => {

 const btnStyle = {
    color:'red',
    backgroundColor: 'black',
    
 }

  return (
  <>
  <p style={{'font-size': '30px' , 'color':'blue', 'text-align':'center' }}>Hello React + Vite + DataQMind</p>
  <button style={ {...btnStyle,...{'font-size':'30px'}}}>Click Me</button>
  </>
  )
}
