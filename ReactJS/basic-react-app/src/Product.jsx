import "./Product.css";

function Product({ title, price, features, features1 }) {
  // const list = features.map((feature) => <li>{feature}</li>)
  let isDiscount = price >= 30000;
  let styles = {backgroundColor : isDiscount ? "yellow" : null};
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h4>Price : {price}</h4>
      {isDiscount ? <p>"5%" </p>: null}
      
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
