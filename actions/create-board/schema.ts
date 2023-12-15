import { z } from "zod";

const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, {
      message: "Title must be at least 3 characters long",
    }),
});

export type CreateBoardInput = z.infer<typeof CreateBoard>;
