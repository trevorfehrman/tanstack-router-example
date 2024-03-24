import { queryOptions } from '@tanstack/react-query';
import { todoSchema } from './schemas';

export const todoQueryOptions = queryOptions({
  queryKey: ['todo'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    const validatedData = todoSchema.parse(data);
    return validatedData;
  },
});
