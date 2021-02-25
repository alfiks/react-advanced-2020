import React from 'react';
import { data } from '../../../data'; // data must have id

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data) // same as import {useState}
  
  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople) 
  } 
  // fragment
  return (
  <>
  {people.map((person) => {
    const {id,name} = person;
    return (    
    <div key={id} className="item">
    <h4>{name}</h4>
    <button onClick={() => removeItem(id)}>
      remove
    </button>
    </div>
    )
  })}
  <button className="btn" onClick={() => setPeople([])}>
    clear items
  </button>
  </>
  )

}

export default UseStateArray;
