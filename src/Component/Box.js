import React from "react";

const Box = ({ title }) => {
  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "yellow",
        textAlign: "center",
        width:"25%",
        
      }}
    >
      {title}
    </div>
  );
};

export default Box;
