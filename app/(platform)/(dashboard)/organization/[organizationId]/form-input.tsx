"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        type="text"
        name="title"
        id="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
        disabled={pending}
      />
      {errors?.title && (
        <div>
          {errors.title.map((error: any) => (
            <div key={error} className="text-red-500">
              {error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
