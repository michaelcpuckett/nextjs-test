import Advertisement from "@/components/Advertisement";
import TodosPageServer from "@/components/TodosPage.server";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";

export const metadata: Metadata = {
  title: "Todos",
};

export default function Home() {
  return (
    <Fragment>
      <TodosPageServer />
      <Suspense fallback={<div>Loading...</div>}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
