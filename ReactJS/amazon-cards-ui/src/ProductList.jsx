import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  return (
    <>
    <div className="PL">
        <Product title="Logitech MX Master 3S" idx = {0}/>
        <Product title="Apple Pencil (2nd Zen)" idx = {1}/>
        <Product title="Zebronics Zeb-Transformer" idx = {2}/>
        <Product title= "Petronics Tod 23" idx = {3}/> 
    </div>
    </>
  );
}

export default ProductList;
