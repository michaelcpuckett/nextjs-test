"use server";

import { client } from "@/lib/client";

export const addTodo = async (_: unknown, formData: FormData) => {
  const name = formData.get("name");

  if (typeof name !== "string") {
    return;
  }

  const todo = { name };
  const res = await client.todo.create.$post(todo);
  const json = await res.json();

  if (json.success) {
    return Promise.resolve(json);
  } else {
    return Promise.reject(json);
  }
};

export const deleteTodo = async (_: unknown, formData: FormData) => {
  const id = formData.get("id");

  if (typeof id !== "string") {
    return;
  }

  const res = await client.todo.delete.$post({ id });
  const json = await res.json();

  if (json.success) {
    return Promise.resolve(json);
  } else {
    return Promise.reject(json);
  }
};
