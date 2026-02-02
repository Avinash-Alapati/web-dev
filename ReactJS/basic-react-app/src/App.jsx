import "./App.css";

// Our First Component

function Title() {
  return <h1>Hello World!</h1>;
}

function Description() {
  return <h4>I am Inside The World!</h4>;
}

function App() {
  return (
    <div>
      <h1>This is a Component</h1>
      <p>Inside App Component we have :</p>
      <Title />
      <Description />
    </div>
  );
}

export default App;
