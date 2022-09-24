import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export interface InputProps {
  defaultValue?: string;
  inputType?: "text" | "submit" | "email";
  label?: string;
  onChange?: (text: string) => void;
}

export const Input = component$(
  ({
    defaultValue = "",
    inputType = "text",
    label = "",
  }: // onChange,
  InputProps) => {
    const store = useStore({
      value: defaultValue,
    });

    useClientEffect$(({ track }) => {
      track(store, "value");
      console.log(store.value);

      // if (onChange) {
      //   onChange(store.value);
      // }
    });

    const INPUT_PROPS = {
      type: inputType,
      value: store.value,
      onKeyUp$: (event: Event) =>
        (store.value = (event.target as HTMLInputElement).value),
    };

    return (
      <div class="input__container">
        <label htmlFor="">
          <span className="label__text">{label}</span>

          <input {...INPUT_PROPS} />
        </label>
      </div>
    );
  }
);
