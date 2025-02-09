import { AddUserForm } from "@/components/AddUserForm";
import Advertisement from "@/components/Advertisement";
import UsersList from "@/components/UsersList";
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
        <UsersList />
        <AddUserForm />
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Advertisement />
      </Suspense>
    </Fragment>
  );
}
