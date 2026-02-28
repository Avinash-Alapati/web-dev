import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  // let options = [ "Technology", "Durable","Faster"];  // Passing Arrays to Props
  // let options1 = {a : "Tech", b : "Durable", c : "Faster"}; // Passing Objects to Props
  return (
    <>
      <div className="ProductList">
        <Product title="Realme 9i" price="15000" />
        <Product title="MacBook Air 3" price={85000} />
        <Product title="IWatch" price="35000"/>
      </div>
    </>
  );
}

export default ProductList;
