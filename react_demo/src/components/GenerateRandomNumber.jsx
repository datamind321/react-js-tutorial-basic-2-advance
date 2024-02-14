import React from 'react'
import {memo} from 'react'


export const GenerateRandomNumber = memo(({randomNumber,generateRandomNumber}) => {
  console.log('Generate Random Number Infered....')
  return (
    <>

    <h1>Random Number: {randomNumber}</h1>
    <button onClick={generateRandomNumber}>Click Here</button>
    </>
  )
})
