import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

/*   const handleClick = () => {
    setValue((currentState) =>{
      const newState =currentState +1;
      console.log(newState)
      return newState;
    });
  }; */
  const handleClick =() =>{
    setTimeout(() =>{
      console.log('Clicke the BTN')
      setValue((currentState) =>{
        const newState =currentState + 1;
        return newState;
      })
    },3000)
  }



  return(
  <div>
    <h1>{value}</h1>
    <button type="button" onClick={handleClick} className="btn">Click</button>
  </div>)
};

export default UseStateGotcha;
