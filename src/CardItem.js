const CardItem = (props) => {
  const { src, title, description, price } = props;
  return (
    <div
      style={{
        backgroundColor: "#faebd6",
        border: "1px solid grey",
        marginRight: "4px",
        height:"45vh",
      }}
    >
      <img src={src} height="60%" width="320px" alt={title}></img>
      <h2 style={{ fontSize: "bold" }}>{title}</h2>
      <p>{description}</p>
      <h3 style={{ color: "red"}}>{price}</h3>
    </div>
  );
};

export default CardItem;
