import React from "react";

const BodyContent = (props) => {
  const { title, content } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BodyContent;
