"use client";

import { client } from "@/lib/client";
import { useActionState } from "react";

export function AddUserForm({
  setUsers,
}: {
  setUsers: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}) {
  const addUser = async (_: unknown, formData: FormData) => {
    const name = formData.get("name");

    if (typeof name !== "string") {
      return;
    }

    const user = { name };
    const res = await client.user.create.$post(user);
    const json = await res.json();

    if (json.success) {
      setUsers((users) => [...users, json.result]);
      return Promise.resolve(json);
    } else {
      return Promise.reject(json);
    }
  };

  const [, submitAction, isSubmitActionPending] = useActionState(addUser, null);

  return (
    <form action={submitAction}>
      <label>
        Name:
        <input type="text" name="name" disabled={isSubmitActionPending} />
      </label>
      <button type="submit" disabled={isSubmitActionPending}>
        Add User
      </button>
    </form>
  );
}
