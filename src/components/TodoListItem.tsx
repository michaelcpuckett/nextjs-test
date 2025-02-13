"use client";

import { ErrorBoundary } from "react-error-boundary";
import DeleteTodoForm from "./DeleteTodoForm";

export default function TodoListItem({
  todo,
}: {
  todo: { id: string; name: string };
}) {
  return (
    <tr key={todo.id}>
      <th scope="row">{todo.name}</th>
      <td>
        <ErrorBoundary
          key={todo.id}
          fallback={<div>Something went wrong! Try again later.</div>}
        >
          <DeleteTodoForm todo={todo} />
        </ErrorBoundary>
      </td>
    </tr>
  );
}
