import { v4 as uuid } from "uuid";
import { z } from "zod";
import { j, publicProcedure } from "../jstack";

const users = [{ name: "Michael Puckett" }];

export const userRouter = j.router({
  getAll: publicProcedure.get(({ c: context }) => {
    return context.json(users);
  }),
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .post(({ c, input }) => {
      const id = uuid();
      const user = { id, name: input.name };
      users.push(user);

      return c.json({ message: "User created successfully!" });
    }),
});
