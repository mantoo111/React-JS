import React from 'react'
{/** 1st way to access */}

{/*
  export default function Header(props) {
    let { headerinfo } = props; // this is destructuring — 2nd way
    console.log(headerinfo);

    console.log(props.headerinfo);
    return (
      <div>
        welcome to my react js series
        // if any query ask on {props.email} | {props.phone} — 1st way
      </div>
    )
  }
*/}




{/**or you can access props using direct passing that name in function instead of propslike */}

export default function Header({headerinfo}) {
    
  return (
    <div>
      welcome to my react js series
      if any query ask on {headerinfo.email}|{headerinfo.phone} 
    </div>
  )
}
