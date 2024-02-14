import React from 'react'
import { useState } from 'react'

export const LearnForm = () => {

    // const[firstName,setFirstName] = useState('')
    // const handlefirstname = (e) => {
    //      setFirstName(e.target.value)
    // }
    

    // const[lastName,setlastName] = useState('')
    // const handlelastname = (e) => {
    //      setlastName(e.target.value)
    // }


  const[formData,setFormData] = useState({
    firstName:'',
    lastName:'',
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit button clicked',formData)
  }



  return (
    <>


    {/* <form action="">
        first Name: <input type="text" name='firstname' value={firstName} onChange={handlefirstname}/> <br /> <br />
        last Name: <input type="text" name='lastname' value={lastName} onChange={handlelastname}/>
    </form> */}

    

    <form action="" onSubmit={handleSubmit}>
        first Name: <input type="text" name='firstName' value={formData.firstName} onChange={handleChange}/> <br /> <br />
        last Name: <input type="text" name='lastName' value={formData.lastName} onChange={handleChange}/> <br /> <br />
        <button type='submit'>Submit</button>
    </form>

    </>
  )
}
