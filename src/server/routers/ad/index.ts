import { z } from "zod";
import { j, publicProcedure } from "../../jstack";

export const adRouter = j.router({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .get(async ({ c: context, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return context.json({
        id: input.id,
        url: "https://homedepot.com",
        heading: "Home Depot",
        bodyCopy: "Home improvement starts here.",
      });
    }),
});
