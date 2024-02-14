import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputheader, setInputheader] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, [inputheader, input]]);
    setInput("");
    setInputheader("");
  };

  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((todo, index) => index !== idToDelete));
  };

  const toprint = (
    <ul id="list">
      {todos.map((todo, index) => (
        <li key={index}>
          <div>
            <strong>Header:</strong> {todo[0]}
            <br />
            <strong>Task:</strong> {todo[1]}
          </div>
          <button id="delete" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="App">
      <h1 id="title">ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          Task:
        </label>
        <br />
        <input
          type="text"
          value={inputheader}
          placeholder="Enter Task Name"
          onChange={(e) => setInputheader(e.target.value)}
        />
        <br />
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Enter Task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" id="submit">
          Add
        </button>
      </form>
      <br />
      <br />
      {todos.length > 0 ? toprint : <strong>No tasks to display</strong>}
    </div>
  );
}

export default App;
