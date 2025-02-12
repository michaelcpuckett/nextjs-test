import useTodoStore from "@/lib/store";
import { useActionState } from "react";
import styles from "./AddTodoForm.module.css";
import { addTodo } from "./actions";

export function AddTodoForm() {
  const isClient = typeof window !== "undefined";
  const addOptimisticTodo = useTodoStore((state) => state.add);
  const removeOptimisticTodo = useTodoStore((state) => state.remove);

  const add = isClient
    ? async (_: unknown, formData: FormData) => {
        addOptimisticTodo({
          id: "optimistic",
          name: formData.get("name") as string,
        });

        return await addTodo(_, formData)
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
      }
    : addTodo;

  const [, action, isPending] = useActionState(add, null);

  return (
    <form action={action} className={styles.form} autoComplete="off">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit" disabled={isPending}>
        Add Todo
      </button>
    </form>
  );
}
