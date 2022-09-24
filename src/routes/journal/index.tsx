import { component$ } from "@builder.io/qwik";
import { Input } from "~/components/forms";

export default component$(() => (
  <div className="journal__container">
    <div className="journal">
      <Input />
    </div>
  </div>
));
