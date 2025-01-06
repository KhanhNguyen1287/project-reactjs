import React from 'react'

const DemoFunctionChild = (props) => {
    const {children} = props;
  return (
    <div>{children()}</div>
  )
}

export default DemoFunctionChild