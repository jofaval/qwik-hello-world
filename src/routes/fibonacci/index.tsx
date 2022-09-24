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
            if (state.fibonacci <= 1) {
              state.backMessage =
                "Sometimes in life, there's no going back, this is one of those times...";
              return;
            }

            state.backMessage = "";

            console.log({
              succession: state.succession,
              fibonacci: state.fibonacci,
              current: state.current,
              previous: state.previous,
            });

            state.succession -= 1;
            // state.fibonacci = state.fibonacci - state.previous;
            // state.current = state.previous;
            // state.previous = state.fibonacci - state.current;
            state.current = state.fibonacci - state.previous;
            state.fibonacci = state.fibonacci - state.current;
            state.previous = state.fibonacci - state.current;

            console.log({
              succession: state.succession,
              fibonacci: state.fibonacci,
              current: state.current,
              previous: state.previous,
            });
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

            console.log({
              succession: state.succession,
              fibonacci: state.fibonacci,
              current: state.current,
              previous: state.previous,
            });
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
