import { CounterApp } from "./components/CounterApp";
import { LearnCSSModule } from "./components/LearnCSSModule";
import { LearnCSSModule2 } from "./components/LearnCSSModule2";
import { LearnComponets } from "./components/LearnComponets";
import { LearnConditionalRendering } from "./components/LearnConditionalRendering";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnEvent } from "./components/LearnEvent";
import { LearnExternalCSS1 } from "./components/LearnExternalCSS1";
import { LearnExternalCSS2 } from "./components/LearnExternalCSS2";
import { LearnForm } from "./components/LearnForm";
import { LearnInlineCSS } from "./components/LearnInlineCSS";
import { LearnJSX } from "./components/LearnJSX";
import { LearnLiftingState } from "./components/LearnLiftingState";
import { LearnMap } from "./components/LearnMap";
import { LearnProps } from "./components/LearnProps";
import { LearnUseCallback } from "./components/LearnUseCallback";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearnUseImg } from "./components/LearnUseImg";
import { LearnUseMemo } from "./components/LearnUseMemo";
import { LearnUseState } from "./components/LearnUseState";
import { LearnUsingEnv } from "./components/LearnUsingEnv";

function App()  {

  let address = "Shahjahanpur"
  const get_data = (data) => {
    
    console.log(data);

  }

  return (
    <>       
    

   

    {/* <LearnComponets />  
    
    <LearnJSX /> 

  
    <LearnProps  name="Raj Singh" add={address} />

    < LearnEvent /> */}

    {/* <LearnLiftingState myclick = {get_data}/> */}

   {/* <LearnUseState /> 

   < CounterApp /> */}

   {/* <LearnUseEffect /> */}


   {/* <LearnUseMemo /> */}

   {/* <LearnUseCallback /> */}

   {/* <LearnCustomHook /> */}


   {/* <LearnConditionalRendering /> */}

   {/* <LearnMap /> */}

   {/* <LearnInlineCSS /> */}

   {/* <LearnExternalCSS1 />
   <LearnExternalCSS2 /> */}

   {/* <LearnCSSModule />

   <LearnCSSModule2 /> */}
   
   {/* <LearnUseImg /> */}

    {/* <LearnForm /> */}

    {/* <LearnUsingEnv /> */}
   


    </>
  )
}

export default App


