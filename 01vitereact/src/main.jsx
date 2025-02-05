import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App |ANSA</h1>
    </div>
  )
}
const anotherElement=(
  <a href='https://www.google.co.uk/' target='_blank'>visit google</a>
)
 const reactElement= React.createElement(
  'a',
  {href: 'https://www.google.co.uk/',target:'_blank'},'click me to visit google'
 )
createRoot(document.getElementById('root')).render(
  
 <App />
  //<MyApp />
 //anotherElement()
 //reactElement

);
