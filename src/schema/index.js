import { z } from "zod";

export const loginschema = z.object({
  phone: z.string().transform((val) => (val.startsWith("+") ? val : `+${val}`)),
  password: z.string().min(3, "validation.passwordMin"),
});
