import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
  console.log('call UseEffect');
  document.title = `New Messages(${value})`
})
console.log("render component")
return <>
<h1>{value}</h1>
<button className="btn" onClick={() => setValue(value + 1)}>Click</button>
</>
  return <h2>useEffect Basics</h2>;
};

export default UseEffectBasics;
