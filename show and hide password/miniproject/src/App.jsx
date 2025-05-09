import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [pstatus,setPstatus]=useState(false);

  return (
    <>
     <div className='bg-amber-100'>
      <input className='text-black bg-white border border-black p-2 rounded' type={pstatus ?'text':'password'}/> 
      <button onClick={()=>setPstatus(!pstatus)}>
        {pstatus ?'Hide':'show'}
      </button>
     </div>
    </>
  )
}

export default App
