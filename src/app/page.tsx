import Advertisement from "@/components/Advertisement";
import UsersPage from "@/components/UsersPageServer";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default function Home() {
  return (
    <Fragment>
      <main>
        <h1>Users</h1>
        <UsersPage />
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
