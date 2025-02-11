import type { AppRouter } from "@/server";
import { createClient } from "jstack";

export const client = createClient<AppRouter>({
  baseUrl: `${getBaseUrl()}/api`,
});

function getBaseUrl() {
  return `http://localhost:8080`;
}
