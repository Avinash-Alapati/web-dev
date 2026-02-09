import "./Product.css";

function Product({ title, price, features, features1 }) {
  // const list = features.map((feature) => <li>{feature}</li>)
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h4>Price : {price}</h4>
      {price >= 30000 ? <p>"5%" </p>: null}
      
      {/* <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {/* <p>{features1.a}</p> */}
    </div>
  );
}

export default Product;
