/** Vendors */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const JournalLink = component$(() => (
  <Link href="/journal" style={{ textDecoration: "none" }}>
    Journal
  </Link>
));
