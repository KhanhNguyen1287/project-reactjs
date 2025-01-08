import React from 'react'

const Header = ({title}) => {
  return (
    <div style={{
     padding:"20px",
     backgroundColor:"greenyellow",
     width:"auto",
     textAlign:"center"
    }}>{title}
    </div>
  )
}

export default Header