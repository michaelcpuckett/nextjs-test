"use client";

import { client } from "@/lib/client";
import useTodoStore from "@/lib/store";
import { useActionState } from "react";

export default function TodoListItem({
  todo,
}: {
  todo: { id: string; name: string };
}) {
  const addOptimisticTodo = useTodoStore((state) => state.add);
  const removeOptimisticTodo = useTodoStore((state) => state.remove);

  const deleteTodo = async () => {
    removeOptimisticTodo(todo.id);

    const res = await client.todo.delete.$post(todo);
    const json = await res.json();

    if (json.success) {
      return Promise.resolve(json);
    } else {
      addOptimisticTodo(todo);
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
