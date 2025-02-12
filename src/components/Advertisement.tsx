import { client } from "@/lib/client";
import { use } from "react";
import styles from "./Advertisement.module.css";

export default function Advertisement() {
  const adRes = use(client.ad.get.$get({ id: "abc123" }));
  const ad = use(adRes.json());

  return (
    <aside className={styles.container}>
      <h2>Lazy Loaded Content</h2>
      <a href={ad.url} data-id={ad.id}>
        <h3>{ad.heading}</h3>
        <p>{ad.bodyCopy}</p>
      </a>
    </aside>
  );
}
