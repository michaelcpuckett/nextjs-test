"use client";

import { Fragment, useState } from "react";
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
      <AddUserForm setUsers={setUsers} />
    </Fragment>
  );
}
