"use client";

import { client } from "@/lib/client";
import { useActionState } from "react";

export function AddTodoForm({
  setTodos,
}: {
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}) {
  const addTodo = async (_: unknown, formData: FormData) => {
    const name = formData.get("name");

    if (typeof name !== "string") {
      return;
    }

    const todo = { name };
    const res = await client.todo.create.$post(todo);
    const json = await res.json();

    if (json.success) {
      setTodos((todos) => [...todos, json.result]);
      return Promise.resolve(json);
    } else {
      return Promise.reject(json);
    }
  };

  const [, submitAction, isSubmitActionPending] = useActionState(addTodo, null);

  return (
    <form action={submitAction}>
      <label>
        Name:
        <input type="text" name="name" disabled={isSubmitActionPending} />
      </label>
      <button type="submit" disabled={isSubmitActionPending}>
        Add Todo
      </button>
    </form>
  );
}
