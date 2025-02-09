"use server";

import { client } from "@/lib/client";
import UsersPageClient from "./UsersPage.client";

export default async function UsersPageServer() {
  const usersRes = await client.user.getAll.$get();
  const users = await usersRes.json();

  return <UsersPageClient users={users} />;
}
