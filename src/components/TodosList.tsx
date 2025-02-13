"use client";

import useTodoStore from "@/lib/store";
import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodosList.module.css";

export default function TodosList({
  todos: initialTodos,
}: {
  todos: { id: string; name: string }[];
}) {
  const [todos, setTodos] = useState(initialTodos);
  const storeTodos = useTodoStore((state) => state.todos);
  const initializeTodosStore = useTodoStore((state) => state.initialize);

  useEffect(() => {
    if (!storeTodos) {
      initializeTodosStore(todos);
    } else {
      setTodos(storeTodos);
    }
  }, [storeTodos, todos, initializeTodosStore]);

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
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}
