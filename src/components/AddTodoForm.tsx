"use client";

import useTodoStore from "@/lib/store";
import { useActionState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./AddTodoForm.module.css";
import { addTodo as addTodoOnServer } from "./actions";

export function AddTodoForm() {
  const isClient = typeof window !== "undefined";
  const addOptimisticTodo = useTodoStore((state) => state.add);
  const removeOptimisticTodo = useTodoStore((state) => state.remove);
  const addTodoOnClient = async (_: unknown, formData: FormData) => {
    addOptimisticTodo({
      id: "optimistic",
      name: formData.get("name") as string,
    });

    return await addTodoOnServer(_, formData)
      .catch(() => {
        removeOptimisticTodo("optimistic");

        throw new Error("Failed to add todo");
      })
      .then((res) => {
        removeOptimisticTodo("optimistic");

        if (res?.success) {
          addOptimisticTodo(res.result);
        }

        return res;
      });
  };
  const addTodo = isClient ? addTodoOnClient : addTodoOnServer;
  const [, action, isPending] = useActionState(addTodo, null);

  return (
    <ErrorBoundary fallback={<div>Something went wrong! Try again later.</div>}>
      <form action={action} className={styles.form} autoComplete="off">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit" disabled={isPending}>
          Add Todo
        </button>
      </form>
    </ErrorBoundary>
  );
}
