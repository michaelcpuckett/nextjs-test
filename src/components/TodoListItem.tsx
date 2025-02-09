"use client";

import { client } from "@/lib/client";
import { useActionState } from "react";

export default function TodoListItem({
  todo,
  setTodos,
}: {
  todo: { id: string; name: string };
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}) {
  const deleteTodo = async () => {
    const res = await client.todo.create.$post(todo);
    const json = await res.json();

    if (json.success) {
      setTodos((todos) => todos.filter((u) => u.id !== todo.id));
      return Promise.resolve(json);
    } else {
      return Promise.reject(json);
    }
  };

  const [, deleteAction, isDeleteActionPending] = useActionState(
    deleteTodo,
    null
  );

  return (
    <tr key={todo.id}>
      <th scope="row">{todo.name}</th>
      <td>
        <form action={deleteAction}>
          <button
            type="submit"
            disabled={isDeleteActionPending}
            aria-label="Delete todo"
          >
            X
          </button>
        </form>
      </td>
    </tr>
  );
}
