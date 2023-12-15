"use client";

import { createBoard } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

function Form() {
  const initalState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createBoard, initalState);
  console.log(state);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
}

export default Form;
