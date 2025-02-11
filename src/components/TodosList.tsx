import useTodoStore from "@/lib/store";
import { Todo } from "@/lib/types";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import TodoListItem from "./TodoListItem";
import styles from "./TodosList.module.css";

export function TodosList({ initialTodos }: { initialTodos: Todo[] }) {
  const [renderedTodos, setRenderedTodos] = useState(initialTodos);
  const todos = useTodoStore((state) => state.todos);

  useEffect(() => {
    if (todos) {
      setRenderedTodos(todos);
    }
  }, [todos]);

  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th scope="col">To Do</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderedTodos.map((todo) => (
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
