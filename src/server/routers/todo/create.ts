import { v4 as uuid } from "uuid";
import { z } from "zod";
import { publicProcedure } from "../../jstack";
import { todos } from "./db";

export default publicProcedure
  .input(z.object({ name: z.string().nonempty() }))
  .post(({ c, input }) => {
    const id = uuid();
    const todo = { id, name: input.name };
    todos.push(todo);

    return c.json({ success: true, result: todo });
  });
