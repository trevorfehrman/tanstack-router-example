import { queryOptions } from '@tanstack/react-query';
import { commentsSchema, photosSchema, todoSchema } from './schemas';

export const todoQueryOptions = queryOptions({
  queryKey: ['todo'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    const validatedData = todoSchema.parse(data);
    return validatedData;
  },
});

export const commentsQueryOptions = queryOptions({
  queryKey: ['comments'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await response.json();
    const validatedData = commentsSchema.parse(data);
    return validatedData;
  },
});

export const photosQueryOptions = queryOptions({
  queryKey: ['photos'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = await response.json();
    const validatedData = photosSchema.parse(data);
    return validatedData;
  },
});
