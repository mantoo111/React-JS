import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"ansaabid",
    age:21
  }
  let newArr=[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
      
 <h1 className=' bg-amber-500 text-black rounded-xl mb-4'>Tailwind test</h1> 
<Card channel="tailwind with react" />
  <Card channel="ANSA ABID" />
  
    </>
  )
}

export default App
