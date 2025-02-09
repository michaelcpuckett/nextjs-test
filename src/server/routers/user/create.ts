import { v4 as uuid } from "uuid";
import { z } from "zod";
import { publicProcedure } from "../../jstack";
import { users } from "./db";

export default publicProcedure
  .input(z.object({ name: z.string().nonempty() }))
  .post(({ c, input }) => {
    const id = uuid();
    const user = { id, name: input.name };
    users.push(user);

    return c.json({ success: true, result: user });
  });
