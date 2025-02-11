import type { AppRouter } from "@/server";
import { createClient } from "jstack";

export const client = createClient<AppRouter>({
  baseUrl: `${getBaseUrl()}/api`,
});

function getBaseUrl() {
  // 👇 Adjust for wherever you deploy
  if (process.env.PORT) return `http://localhost:${process.env.PORT}`;
  return `http://localhost:3000`;
}
