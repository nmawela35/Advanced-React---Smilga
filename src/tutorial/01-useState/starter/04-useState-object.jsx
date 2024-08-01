import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState("Reading books");

  const displayName =() =>{
    setName('Chris')
    setAge(45)
    setHobby('Mahafhe')
  }

  return(
  <>
  <h2>useState object example</h2>
  <h3>{name}</h3>
  <h3>He is: {`${age} old`}</h3>
  <h3>{hobby}</h3>
  <button type="button" onClick={displayName}>Show Name</button>
  </>)
};

export default UseStateObject;
