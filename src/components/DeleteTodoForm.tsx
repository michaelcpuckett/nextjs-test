import useTodoStore from "@/lib/store";
import { Todo } from "@/lib/types";
import { useActionState } from "react";
import { deleteTodo as deleteTodoOnServer } from "./actions";

export default function DeleteTodoForm({ todo }: { todo: Todo }) {
  const isClient = typeof window !== "undefined";
  const addOptimisticTodo = useTodoStore((state) => state.add);
  const removeOptimisticTodo = useTodoStore((state) => state.remove);
  const deleteTodoOnClient = async (_: unknown, formData: FormData) => {
    removeOptimisticTodo(todo.id);

    return await deleteTodoOnServer(_, formData)
      .catch(() => {
        addOptimisticTodo(todo);

        throw new Error("Failed to delete todo");
      })
      .then((res) => {
        if (!res?.success) {
          addOptimisticTodo(todo);
        }

        return res;
      });
  };
  const deleteTodo = isClient ? deleteTodoOnClient : deleteTodoOnServer;

  const [, deleteAction, isDeleteActionPending] = useActionState(
    deleteTodo,
    null
  );

  return (
    <form action={deleteAction}>
      <input type="hidden" name="id" value={todo.id} />
      <button
        type="submit"
        disabled={isDeleteActionPending}
        aria-label="Delete todo"
      >
        X
      </button>
    </form>
  );
}
