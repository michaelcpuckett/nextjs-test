import { z } from "zod";
import { publicProcedure } from "../../jstack";
import { todos } from "./db";

export default publicProcedure
  .input(z.object({ id: z.string().nonempty() }))
  .post(({ c, input }) => {
    const index = todos.findIndex((todo) => todo.id === input.id);

    todos.splice(index, 1);

    return c.json({ success: true });
  });
