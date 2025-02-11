"use client";

import useTodoStore from "@/lib/store";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AddTodoForm } from "./AddTodoForm";
import { TodosList } from "./TodosList";

export default function TodosPageClient({
  todos: initialTodos,
}: {
  todos: { id: string; name: string }[];
}) {
  const setTodos = useTodoStore((state) => state.setTodos);

  useEffect(() => {
    setTodos(initialTodos);
  }, [setTodos, initialTodos]);

  return (
    <main>
      <h1>Todos</h1>
      <TodosList />
      <ErrorBoundary
        fallback={<div>Something went wrong! Try again later.</div>}
      >
        <AddTodoForm />
      </ErrorBoundary>
    </main>
  );
}
