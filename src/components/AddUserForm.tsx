"use client";

import { client } from "@/lib/client";
import { useActionState } from "react";

export function AddUserForm() {
  const addUser = async (_: unknown, formData: FormData) => {
    const name = formData.get("name");

    if (typeof name !== "string") {
      return;
    }

    const user = { name };
    const res = await client.user.create.$post(user);

    return res.json();
  };

  const [submitActionState, submitAction] = useActionState(addUser, null);

  return (
    <form action={submitAction}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Add User</button>
      <output>{submitActionState?.message ?? "..."}</output>
    </form>
  );
}
