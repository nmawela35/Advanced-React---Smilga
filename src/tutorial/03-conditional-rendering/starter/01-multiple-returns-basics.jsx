import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setisLoading] =useState(true);
  const [isError, setisError] =useState(true)

  if (isLoading){
    return <h2>Loading please wait...</h2>
  }

  if (isError){
    return <h2>There was an error</h2>
  }

  return <h2>Multiple Returns Basics</h2>;
};

export default MultipleReturnsBasics;
