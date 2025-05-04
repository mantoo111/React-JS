import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import reactlogo from './images/react1.jpeg';

function App() {
  let displaydata = () => {
    alert("Welcome to React series")
  }
  let addData=(a,b)=>{
console.log(a+b)
console.log("u have been register for this course")
alert("u have been register for this course")
  }

  return (
    <>
      <div>
        <button className="p-2 mr-4" onClick={displaydata}>
          Show detail
        </button>
        <button className="p-2" onClick={()=>addData(1,2)}>Click for registration</button>
        <img src={reactlogo} alt="React logo" className="mt-4 w-48" />
      </div>
    </>
  );
}

export default App;
