import { component$, useStore } from "@builder.io/qwik";
// import { fibonacciGenerator } from "~/helpers/fibonacci";

export default component$(() => {
  // const state = useStore({ fibonacci: 0, f: fibonacciGenerator() });
  const state = useStore({
    fibonacci: 1,
    previous: 0,
    current: 0,
    succession: 0,
    backMessage: "",
  });

  return (
    <>
      <h1>Fibonacci ({state.succession})</h1>

      <div
        style={{
          textAlign: "center",
        }}
      >
        {state.fibonacci}
      </div>

      <div className="actions">
        <button
          onClick$={() => {
            state.backMessage =
              "Sometimes in life, there's no going back, this is one of those times...";
          }}
        >
          Back
        </button>
        <button
          onClick$={() => {
            state.succession += 1;
            state.current = state.fibonacci;
            state.fibonacci = state.previous + state.current;
            state.previous = state.current;
            state.backMessage = "";
          }}
        >
          Next
        </button>
      </div>

      <div className="warning">{state.backMessage}</div>
    </>
  );
});

export interface MyCmpProps {
  step: number;
}
