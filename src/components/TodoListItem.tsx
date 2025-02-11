"use client";

import { client } from "@/lib/client";
import useTodoStore from "@/lib/store";
import { useActionState } from "react";

export default function TodoListItem({
  todo,
}: {
  todo: { id: string; name: string };
}) {
  const removeTodoFromStore = useTodoStore((state) => state.remove);

  const deleteTodo = async () => {
    const res = await client.todo.delete.$post(todo);
    const json = await res.json();

    if (json.success) {
      removeTodoFromStore(todo.id);
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
