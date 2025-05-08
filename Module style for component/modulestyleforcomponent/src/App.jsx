import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import btnmodule from "./Button.module.css"
import './App.css'

function App() {
 let [Status,setStatus]=useState(false);

  return (
    <>
      <div className='bg-amber-400'>
        <button className={`${btnmodule.error} mr-4`}>Error</button>
 <button className={`${btnmodule.warning} mr-4`}>Demo</button>
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

