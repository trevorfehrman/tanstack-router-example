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
    <div className='flex flex-col gap-y-5'>
      <h1>Query Cache Pictures</h1>
      <h2 className='font-bold'>Todo Data: </h2>
      <p>
        <span className='italic'>ID: </span>
        {todo.id}
      </p>
      <p>
        <span className='italic'>User ID: </span>
        {todo.userId}
      </p>
      <p>
        <span className='italic'>Completed: </span>
        {todo.completed ? 'Yes' : 'No'}
      </p>
      <p>
        <span className='italic'>Title: </span>
        {todo.title}
      </p>

      <h3 className='font-bold'>Pictures:</h3>
      <ul className='grid grid-cols-6 gap-8'>
        {photos.map(photo => (
          <li key={photo.id}>
            <p>
              <span className='italic'>ID: </span>
              {photo.id}
            </p>
            <p>
              <span className='italic'>Post ID: </span>
              {photo.albumId}
            </p>
            <p className='truncate'>
              <span className='italic'>Name: </span>
              {photo.title}
            </p>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
      <div className='mb-10'>
        <Link
          to='./submit'
          from={Route.fullPath}
          className='uppercase border rounded p-2 hover:bg-slate-400 transition-all'
        >
          Submit
        </Link>
      </div>
    </div>
  );
}
