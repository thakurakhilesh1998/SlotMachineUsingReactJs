import React from 'react';
import {SlotM} from './SlotM';

const App=()=>{

  return (

    <>
    <h1 className="headig_style">Welcome to <span>Slot Machine </span></h1>
    <div className="main">
    <SlotM
      first='😃'
      second='😃'
      third='😃'
    />
    <SlotM
      first='😃'
      second='😦'
      third='😃'
    />
    <SlotM
    first='👍'
      second='👍'
      third='👍'
      />
      </div>
    </>
  );
}




export {App};
