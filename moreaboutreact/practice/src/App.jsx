import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';


function App() {


  return (
    <div className='mx-auto max-w-sm flex flex-col justify-center my-12'>
      <h1 className='text-center text-2xl font-bold mb-12 text-white' >Designing Card in Tailwind</h1>
      <Card/>
      
    </div>
  );    
}

export default App;
