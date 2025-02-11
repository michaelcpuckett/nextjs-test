import useTodoStore from "@/lib/store";
import { ErrorBoundary } from "react-error-boundary";
import TodoListItem from "./TodoListItem";
import styles from "./TodosList.module.css";

export function TodosList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th scope="col">To Do</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <ErrorBoundary
            key={todo.id}
            fallback={<div>Something went wrong! Try again later.</div>}
          >
            <TodoListItem todo={todo} />
          </ErrorBoundary>
        ))}
      </tbody>
    </table>
  );
}
