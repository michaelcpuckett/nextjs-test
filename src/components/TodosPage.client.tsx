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
  const initializeTodosStore = useTodoStore((state) => state.initialize);

  useEffect(() => {
    initializeTodosStore(initialTodos);
  }, [initializeTodosStore, initialTodos]);

  return (
    <main>
      <h1>Todos</h1>
      <TodosList initialTodos={initialTodos} />
      <ErrorBoundary
        fallback={<div>Something went wrong! Try again later.</div>}
      >
        <AddTodoForm />
      </ErrorBoundary>
    </main>
  );
}
