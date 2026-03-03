import "./App.css";
import Title from "./Title";
import { Description } from "./Description";
import MsgBox from "./MsgBox";
import ProductList from "./ProductList";
import Button from "./Button";
import Form from "./Form";

// Our First Component

function App() {
  return (
    <>
      {/* <h1>This is App Component</h1>
      <p>Inside App Component we have :</p>
      <Title />
      <Description /> */}

      {/* <ProductList /> */}
      <MsgBox userName="Avinashhh" textColor="blue"/>
      <ProductList />
      <Button />
      <Form />
    </>
  );
}

export default App;
