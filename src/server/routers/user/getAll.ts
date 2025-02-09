import { publicProcedure } from "../../jstack";
import { users } from "./db";

export default publicProcedure.get(({ c: context }) => {
  return context.json(users);
});
