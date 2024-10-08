"use client"
import { useContext } from "react";
import { StoreContext } from "./store";
import { useStore, actions } from "./store";

export default function Home() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  console.log(state);

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div style={{ padding: 30 }}>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
