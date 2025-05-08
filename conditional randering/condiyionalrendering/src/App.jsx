import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [Status,setStatus]=useState(false);

  return (
    <>
      <div className='bg-amber-400'>
        <button on onClick={()=>setStatus(!Status)}>show</button>
        {
        (Status)
        ?
        <p >welcome to reactt series</p>
        
        :
        ''
        }       
      </div>
    </>
  )
}

export default App
