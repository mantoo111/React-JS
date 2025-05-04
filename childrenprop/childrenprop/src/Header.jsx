import React from 'react'

export default function Header({headerinfo,children}) {
  return (
    <div>
      <h2>{children}</h2>
      <h3>contact us if any issue  {headerinfo.email}|{headerinfo.phone}</h3>
    </div>
  )
}
