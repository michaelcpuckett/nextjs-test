import type { AppRouter } from "@/server";
import { createClient } from "jstack";

export const client = createClient<AppRouter>({
  baseUrl: `${getBaseUrl()}/api`,
});

function getBaseUrl() {
  // 👇 Adjust for wherever you deploy
  return "https://nextjs-test-737158727299.us-central1.run.app";
}
