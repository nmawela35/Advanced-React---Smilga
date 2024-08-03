import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] =useState(false)
  console.log('render')
  return <div>
    <button className="btn" onClick={() =>setToggle(!toggle)}>Toggle Component</button>
    {toggle && <RandomComponent/>}
  </div>;
};

//Cleanup function
/* const RandomComponent =() =>{
  useEffect (() =>{
    console.log('hmmm,interesting')
   const intId = setInterval(()=>{
      console.log("Hello interval")
    },1000)

    return () =>{
      clearInterval(intId)
    }
  },[])
  return <h1>Hello there</h1>
} */

//Cleanup functions with Event listeners
const RandomComponent =() =>{
  useEffect(() =>{
    const someFunc =() =>{

    }
  window.addEventListener(scroll,someFunc)
  window.removeEventListener(scroll, someFunc)
  },[])
  return <h1>Hello there</h1>

}  

export default CleanupFunction;
