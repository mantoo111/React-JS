import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
function App() {
 let headerinfo={
email:"manto123@gmail.com" ,
phone:"+92 4587654709"
 }

  return (
   
  <div>
    {/* 1st way;below*/}
    {/*<Header email="manto123@gmail.com" phone="+92 4587654709"/>*/}
      {/* here email is custom attribute prop should also use exactly same name */}
{/*2nd way is */}
<Header headerinfo= {headerinfo}/>
  </div>
  );
}
export default App;
