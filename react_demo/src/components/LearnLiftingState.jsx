import React from 'react'

export const LearnLiftingState = (props) => {
  const clickhandler = (e) => {
    e.preventDefault()
    let dt = "I am Developer"
    props.myclick(dt)
  }
  return (
 <>
 
 <button onClick={clickhandler}>Let EVent</button>

 
 </>
  )
}
