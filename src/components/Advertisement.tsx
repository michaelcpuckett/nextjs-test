"use server";

import { client } from "@/lib/client";

export default async function Advertisement() {
  const adRes = await client.ad.get.$get({ id: "abc123" });
  const ad = await adRes.json();

  return (
    <aside>
      <h2>Advertisement</h2>
      <a href={ad.url} data-id={ad.id}>
        <h3>{ad.heading}</h3>
        <p>{ad.bodyCopy}</p>
      </a>
    </aside>
  );
}
