"use client";

import { Fragment, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AddUserForm } from "./AddUserForm";
import { UsersList } from "./UsersList";

export default function UsersPageClient({
  users: initialUsers,
}: {
  users: { id: string; name: string }[];
}) {
  const [users, setUsers] = useState(initialUsers);

  return (
    <Fragment>
      <UsersList users={users} />
      <ErrorBoundary
        fallback={<div>Something went wrong! Try again later.</div>}
      >
        <AddUserForm setUsers={setUsers} />
      </ErrorBoundary>
    </Fragment>
  );
}
