import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const reducer = (state,action) => {
    console.log(state,action)
    return state;
  }
  const defaultState = {
    people:[],
    isModalOpen: false,
    modalContent: ""
  }
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer,defaultState)
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      dispatch({type:"TESTING"})
    }
    else{
    }
  }
  return <>
  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  <form onSubmit={handleSubmit} className="form">
    <div>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
    </div>
    <button type="submit">Submit</button>
  </form>
  {state.people.map((person)=>{
    return <div key={person.id}>
<h4>{person.name}</h4>
    </div>
  })}
  </>;
};

export default Index;
