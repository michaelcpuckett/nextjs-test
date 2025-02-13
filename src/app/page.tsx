import { AddTodoForm } from "@/components/AddTodoForm";
import AdFallback from "@/components/AdFallback";
import Advertisement from "@/components/Advertisement";
import TodosList from "@/components/TodosList";
import { client } from "@/lib/client";
import { Metadata } from "next";
import { Fragment, Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Todos",
};

export default function Home() {
  const todosRes = use(client.todo.getAll.$get());
  const todos = use(todosRes.json());

  return (
    <Fragment>
      <main className={styles.container}>
        <h1>Todos</h1>
        <TodosList todos={todos} />
        <ErrorBoundary
          fallback={<div>Something went wrong! Try again later.</div>}
        >
          <AddTodoForm />
        </ErrorBoundary>
      </main>
      <Suspense fallback={<AdFallback />}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
