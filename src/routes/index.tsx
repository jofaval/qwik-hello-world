import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { JournalLink } from "~/components/nav";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
        <JournalLink />
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
