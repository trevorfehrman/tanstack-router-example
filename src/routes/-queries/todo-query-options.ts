import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export const todoQueryOptions = queryOptions({
  queryKey: ['todo'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    const validatedData = todoSchema.parse(data);
    return validatedData;
  },
  meta: {
    queryMessage: 'Fetch Todo',
  },
});
