import AdFallback from "@/components/AdFallback";
import Advertisement from "@/components/Advertisement";
import TodosPage from "@/components/TodosPage";
import { client } from "@/lib/client";
import { Metadata } from "next";
import { Fragment, Suspense, use } from "react";

export const metadata: Metadata = {
  title: "Todos",
};

export default function Home() {
  const todosRes = use(client.todo.getAll.$get());
  const todos = use(todosRes.json());

  return (
    <Fragment>
      <TodosPage todos={todos} />
      <Suspense fallback={<AdFallback />}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
