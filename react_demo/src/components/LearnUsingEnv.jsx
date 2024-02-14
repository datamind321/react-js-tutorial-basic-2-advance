export const LearnUsingEnv = () => {
  return (
 <>
 
 <h1>How To Use env in React + Vite</h1>


 <br />
 
  {import.meta.env.VITE_API_KEY}

  <br />

  {import.meta.env.VITE_API_URL}


 </>
  )
}
