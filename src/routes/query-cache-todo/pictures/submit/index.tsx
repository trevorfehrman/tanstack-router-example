import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/pictures/submit/')({
  component: QueryCacheTodoPicturesSubmit,
});

function QueryCacheTodoPicturesSubmit() {
  const ctx = Route.useRouteContext();

  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const photosQuery = useSuspenseQuery(ctx.photosQueryOptions);

  const todo = todoQuery.data;
  const photos = photosQuery.data;

  const payload = { todo, photos };

  return (
    <div>
      <h1>Query Cache Picture Submit</h1>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
