"use client";

import useTodoStore from "@/lib/store";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AddTodoForm } from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import styles from "./TodosPage.module.css";

export default function TodosPageClient({
  todos: initialTodos,
}: {
  todos: { id: string; name: string }[];
}) {
  const [optimisticTodos, setOptimisticTodos] = useState(initialTodos);
  const storeTodos = useTodoStore((state) => state.todos);
  const initializeTodosStore = useTodoStore((state) => state.initialize);

  useEffect(() => {
    if (!storeTodos) {
      initializeTodosStore(optimisticTodos);
    } else {
      setOptimisticTodos(storeTodos);
    }
  }, [storeTodos, optimisticTodos, initializeTodosStore]);

  return (
    <main className={styles.container}>
      <h1>Todos</h1>
      <table className={styles.list}>
        <thead>
          <tr>
            <th scope="col">To Do</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {optimisticTodos.map((todo) => (
            <ErrorBoundary
              key={todo.id}
              fallback={<div>Something went wrong! Try again later.</div>}
            >
              <TodoListItem todo={todo} />
            </ErrorBoundary>
          ))}
        </tbody>
      </table>
      <ErrorBoundary
        fallback={<div>Something went wrong! Try again later.</div>}
      >
        <AddTodoForm />
      </ErrorBoundary>
    </main>
  );
}
