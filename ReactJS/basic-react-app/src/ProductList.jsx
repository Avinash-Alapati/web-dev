import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  // let options = [ "Technology", "Durable","Faster"];  // Passing Arrays to Props
  // let options1 = {a : "Tech", b : "Durable", c : "Faster"}; // Passing Objects to Props
  return (
    <>
      <div className="ProductList">
        <Product title="IPhone" price="95k" />
        <Product title="MacBook Air 3" price={85000} />
        {/* <Product title="IWatch" price="35k" features = {["Technology", "Durable", "Faster"]} features1 = {options1}/> */}
      </div>
    </>
  );
}

export default ProductList;
