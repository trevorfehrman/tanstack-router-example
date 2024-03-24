import { z } from 'zod';

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export const commentsSchema = z.array(
  z.object({
    postId: z.number(),
    id: z.number(),
    name: z.string(),
    email: z.string(),
    body: z.string(),
  })
);

export const photosSchema = z.array(
  z.object({
    albumId: z.number(),
    id: z.number(),
    title: z.string(),
    url: z.string(),
    thumbnailUrl: z.string(),
  })
);
