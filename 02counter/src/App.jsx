import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //below line for useState is written exactly like this [variable.method] 
  //useState will update the value of that variable where it is used in the code
let [counter,setCounter]=useState(5)
 //let counter =5
 function addValue(){
  //console.log("value added",Math.random());
//setCounter(counter+1)can be done by this or by line 14,15
  counter=counter+1;
  setCounter(counter)
  console.log("click",counter);
 }
 const removeValue = ()=>{
  
  
  setCounter(counter-1)
 
 }
  return (
    <>
     
      <h1>react hook</h1>
      <h2>counter value {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p><footer>{counter}</footer></p>
    </>
  )
}

export default App
