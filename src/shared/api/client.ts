import createClient from "openapi-fetch";
import type { paths } from "../../__generated__/api";

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default client;