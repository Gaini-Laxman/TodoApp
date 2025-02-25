import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(name) {
    setTodos(todos.filter((todo) => todo.name !== name));
  }

  function handleToggleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={() => handleToggleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item.name)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
