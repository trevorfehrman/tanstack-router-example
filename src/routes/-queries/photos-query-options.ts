import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

export const photosSchema = z.array(
  z.object({
    albumId: z.number(),
    id: z.number(),
    title: z.string(),
    url: z.string(),
    thumbnailUrl: z.string(),
  })
);

export const photosQueryOptions = queryOptions({
  queryKey: ['photos'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = await response.json();
    const validatedData = photosSchema.parse(data);
    return validatedData;
  },
});
