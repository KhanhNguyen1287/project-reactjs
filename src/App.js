import "./App.css";
import CardItem from "./CardItem";
import DemoChildren from "./DemoChildren";
import DemoFunctionChild from "./DemoFunctionChild";

const src1 =
  "https://laptopdell.com.vn/wp-content/uploads/2023/02/iPhone-15-Ultra.jpg";
const src2 =
  "https://product.hstatic.net/1000359786/product/iphone-16-pro-finish-select-202409-6-9inch_9b775ca8ac634d6587360f54b909ecfd_master.jpg";
const src3 =
  "https://cdn.tgdd.vn/Products/Images/44/302146/macbook-pro-14-inch-m2-pro-gray-1-750x500.jpg";
function App() {
  return (
    <>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <CardItem
          src={src1}
          title="Iphone 15 Pro 128Gb"
          description="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ"
          price="22990000 đ"
        />
        <CardItem
          src={src2}
          title="Iphone 15 Pro"
          description="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 6.000.000 VNĐ"
          price="24990000 đ"
        />
        <CardItem
          src={src3}
          title="Laptop Pro"
          description="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 7.000.000 VNĐ"
          price="23990000 đ"
        />
        
        
      </div>

      <DemoChildren>
        <h1>Hello World</h1>
        <h1>Green Academy</h1>
      </DemoChildren>

      <DemoFunctionChild>
        {() => <h1>Children Function Test</h1>}
      </DemoFunctionChild>
    </>
  );
}

export default App;
