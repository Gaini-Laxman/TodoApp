import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return; // Prevent empty todos
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter Today Task..."
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
