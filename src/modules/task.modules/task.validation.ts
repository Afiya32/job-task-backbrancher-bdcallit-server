//task validation
import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string(),
  isDone:z.boolean(),
  price: z.number().nonnegative(),
  rating: z.number().min(0).max(5),
  description: z.string(),
  image: z.string().url(),
});