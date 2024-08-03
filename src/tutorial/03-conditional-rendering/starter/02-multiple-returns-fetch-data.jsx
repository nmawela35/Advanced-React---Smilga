import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading,setisLoading] =useState(true);
  const [isError,setisError] =useState(false);

  const [user,isUser] =useState(null);

  useEffect(() =>{
    const fetchUser = async() =>{
      try {

        const response = await fetch(url);
        if(!response.ok){
          setisError(true)
          setisLoading(false);
          return;
        }
        const user = await response.json();
          setUser(user)

      } catch (error) {
          setisError(true)
          console.log(error)
      }
      setisLoading(false)
    }
    fetchUser();
  },[])

  if (isLoading){
    return <h2>Loading please wait...</h2>
  }

  if (isError){
    setisError(true)
    return <h2>There was an error</h2>
  }

    const {avatar_url, name, company, bio} =user;
  return <div>
    <img src={avatar_url} alt={name} style = {{width:'150px', borderRadius: '25px'}} />
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
