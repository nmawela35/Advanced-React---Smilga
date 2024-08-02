import { useState } from "react";

const UseStateObject = () => {
  /* const [name, setName] = useState("Peter");
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState("Reading books");
 */

  const [person,setPerson] = useState({
    name:'Christopher',
    age: 45,
    hobby: 'Vha nwa mahafhe',
  })
  const displayName =() =>
/*    { setName('Chris')
    setAge(45)
    setHobby('Mahafhe')} */
  

  setPerson({
    name: 'Tsire',
    age:25,
    hobby:'Soccer',
  })

  // setPerson({...person, name:"Christopher Mawela"}) //override name

  return(
    <>
  <h2>useState object example</h2>
  <h3>{person.name}</h3>
  <h3>He is: {`${person.age} old`}</h3>
  <h3>{person.hobby}</h3>
  <button type="button" onClick={displayName}>Show Name</button>
  </>)
};

export default UseStateObject;
