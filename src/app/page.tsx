import AdFallback from "@/components/AdFallback";
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
      <Suspense fallback={<AdFallback />}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
