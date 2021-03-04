import React, { useState } from 'react';

const UseStateObject = () => {
const [person, setPerson] = useState ({name:"Peter", age: 34, message:"Random Message"})
// const changeMessage = () => {setPerson({...person, message: "hello world"})}

const [name, setName] = useState("peter");
const [age, setAge] = useState(24);
const[message, setMessage] = useState ("Diff");

const changeMessage = () => {
  setMessage ('hi')
}

  return <>
  <h3>{name}</h3>
    <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick={changeMessage}>Click</button>

  </>

};
export default UseStateObject;
