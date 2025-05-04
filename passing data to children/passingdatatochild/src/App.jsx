import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import { blog } from "./Data/blog";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
function App() {
  let headerinfo = {
    email: "manto123@gmail.com",
    phone: "+92 3567890002",
  };

  return (
    <div>
      <Header headerinfo={headerinfo}>
        <h1>this is children</h1>
        <FontAwesomeIcon icon={faWhatsapp}/>
      </Header>

      <div className="bg-amber-600 flex flex-col">
       {/*sending data to child ProductItems*/}
        {blog.map((v, i) => {
          return(
            <ProductItems pitems={v} key={i} />
          )
      })
    }
      </div>
    </div>
  );
}

export default App;
function ProductItems({ pitems }) {
  return (
    <>
      <div className="mb-4">{pitems.title}</div>
    
    </>
  );
}
