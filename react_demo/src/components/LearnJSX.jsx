import React from 'react'

export const LearnJSX = () => {
let model = "BERT"
  return (
    <>
    
    {/* React.createElement("h1","null","LearnJSX 1") */}

    <h1>LearnJSX 1</h1>

     {/* React.createElement("h2","null","LearnJSX 2") */}

    <h2>Learn JSX 2</h2>

    {/* JavaScripts Expression Used in JSX */}
    
    <h3>Costs is : {30+200}</h3>


     {/* JavaScripts Variable Used in JSX */}

     <h4>My Model: {model}</h4>

      {/* Attribute Used in JSX */}

      <h5 className='text-light'>Danger For Health</h5>

      <h6 className={model}>Variable Attribute</h6>




    </>
  )
}
