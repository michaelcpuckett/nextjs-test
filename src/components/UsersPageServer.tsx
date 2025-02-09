"use server";

import { client } from "@/lib/client";
import { Fragment } from "react";
import UsersPageClient from "./UsersPageClient";

export default async function UsersPageServer() {
  const usersRes = await client.user.getAll.$get();
  const users = await usersRes.json();

  return (
    <Fragment>
      <UsersPageClient users={users} />
    </Fragment>
  );
}
