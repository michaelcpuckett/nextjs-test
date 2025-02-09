"use client";

import { Fragment, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AddTodoForm } from "./AddTodoForm";
import { TodosList } from "./TodosList";

export default function TodosPageClient({
  todos: initialTodos,
}: {
  todos: { id: string; name: string }[];
}) {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Fragment>
      <TodosList todos={todos} setTodos={setTodos} />
      <ErrorBoundary
        fallback={<div>Something went wrong! Try again later.</div>}
      >
        <AddTodoForm setTodos={setTodos} />
      </ErrorBoundary>
    </Fragment>
  );
}
