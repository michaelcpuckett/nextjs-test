"use server";

import { client } from "@/lib/client";
import TodosPageClient from "./TodosPage.client";

export default async function TodosPageServer() {
  const todosRes = await client.todo.getAll.$get();
  const todos = await todosRes.json();

  return <TodosPageClient todos={todos} />;
}
