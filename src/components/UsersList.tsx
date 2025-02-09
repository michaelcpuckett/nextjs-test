"use server";

import { client } from "@/lib/client";

export default async function UsersList() {
  const usersRes = await client.user.getAll.$get();
  const users = await usersRes.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}
