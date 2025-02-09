import { publicProcedure } from "../../jstack";
import { todos } from "./db";

export default publicProcedure.get(({ c: context }) => {
  return context.json(todos);
});
