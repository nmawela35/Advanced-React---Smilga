import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text,setText] =useState('');
  const [name,setName] =useState('susan')

  const codeExample =text || 'Hello World' 


  return <div>
    <h4>Falsy OR : {text || 'Hi Chris'}</h4>
    <h4>Falsy AND : {text && 'Hi Chris'}</h4>
    <h4>Truthy OR : {name || 'Hi Chris'}</h4>
    <h4>Truthy OR : {name && 'Hi Chris'}</h4>
    {codeExample}
  </div>;
};
export default ShortCircuitOverview;
