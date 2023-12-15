"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

function Form() {
  const initalState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createBoard, initalState);
  console.log(state);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        {state?.errors?.title && (
          <div>
            {state.errors.title.map((error: any) => (
              <div key={error} className="text-red-500">
                {error}
              </div>
            ))}
          </div>
        )}
      </div>
      <Button type="submit">Create Board</Button>
    </form>
  );
}

export default Form;
