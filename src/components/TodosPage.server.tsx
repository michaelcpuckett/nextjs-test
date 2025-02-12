import { client } from "@/lib/client";
import { use } from "react";
import TodosPageClient from "./TodosPage.client";

export default function TodosPageServer() {
  const todosRes = use(client.todo.getAll.$get());
  const todos = use(todosRes.json());

  return <TodosPageClient todos={todos} />;
}
