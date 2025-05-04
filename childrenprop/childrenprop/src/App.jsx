import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  
let headerinfo={
  email:"manto123@gmail.com",
  phone:"+92 3567890002"
}
  return (
    
      <div>
        <Header headerinfo={headerinfo}>
        <h1>this is children</h1>
        </Header>
        </div>
  );
}

export default App
