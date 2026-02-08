import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  return (
    <>
      <div className="ProductList">
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default ProductList;
