import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

export const commentsSchema = z.array(
  z.object({
    postId: z.number(),
    id: z.number(),
    name: z.string(),
    email: z.string(),
    body: z.string(),
  })
);

export const commentsQueryOptions = queryOptions({
  queryKey: ['comments'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await response.json();
    const validatedData = commentsSchema.parse(data);
    return validatedData;
  },
  select: data => data.slice(0, 5),
});
