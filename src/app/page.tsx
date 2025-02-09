import Advertisement from "@/components/Advertisement";
import TodosPage from "@/components/TodosPage.server";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Todos",
};

export default function Home() {
  return (
    <Fragment>
      <main className={styles.container}>
        <h1>Todos</h1>
        <TodosPage />
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
