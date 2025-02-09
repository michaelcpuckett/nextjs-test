import { j } from "./jstack";
import { adRouter } from "./routers/ad";
import { userRouter } from "./routers/user";

/**
 * This is your base API.
 * Here, you can handle errors, not-found responses, cors and more.
 */
const api = j
  .router()
  .basePath("/api")
  .use(j.defaults.cors)
  .onError(j.defaults.errorHandler);

/**
 * This is the main router for your server.
 * All routers in /server/routers should be added here manually.
 */
const appRouter = j.mergeRouters(api, {
  user: userRouter,
  ad: adRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
