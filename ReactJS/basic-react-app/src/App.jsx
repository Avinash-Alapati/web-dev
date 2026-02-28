import "./App.css";
import Title from "./Title";
import { Description } from "./Description";
import MsgBox from "./MsgBox";
import ProductList from "./ProductList";

// Our First Component

function App() {
  return (
    <>
      {/* <h1>This is App Component</h1>
      <p>Inside App Component we have :</p>
      <Title />
      <Description /> */}

      {/* <ProductList /> */}
      <MsgBox userName="Sriluuuu" textColor="blue"/>
      <ProductList />

    </>
  );
}

export default App;
