import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Test Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos , newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  }
  return (
    <>
      <div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
        <br />
        <button onClick={addNewTask}>Add</button>
        <br />
        <br />
        <br />

        <hr />
        <h4>Tasks</h4>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
