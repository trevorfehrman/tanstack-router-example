import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/pictures/')({
  component: QueryCacheTodoPictures,
});

function QueryCacheTodoPictures() {
  const ctx = Route.useRouteContext();

  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const photosQuery = useSuspenseQuery(ctx.photosQueryOptions);

  const todo = todoQuery.data;
  const photos = photosQuery.data;

  return (
    <div>
      <h1>Query Cache Pictures</h1>
      <h2>
        ID: {todo.id} User ID: {todo.userId} Completed: {todo.completed} Title: {todo.title}{' '}
      </h2>
      <h2>
        {photos.map(photo => (
          <div key={photo.id}>
            <h3>{photo.id}</h3>
            <h3>{photo.albumId}</h3>
            <h3>{photo.title}</h3>
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </h2>
      <Link to='./submit' from={Route.fullPath}>
        Submit
      </Link>
    </div>
  );
}
