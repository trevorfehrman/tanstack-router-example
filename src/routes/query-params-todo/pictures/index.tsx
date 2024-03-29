import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-params-todo/pictures/')({
  component: QueryParamsPictures,
});

function QueryParamsPictures() {
  const ctx = Route.useRouteContext();
  const photosQuery = useSuspenseQuery(ctx.photosQueryOptions);
  const photos = photosQuery.data;
  return (
    <div>
      <h1>Query Params Comments</h1>
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
      <Link
        to='/query-params-todo/pictures/submit'
        from={Route.fullPath}
        search={prev => ({ ...prev, photos })}
      >
        Submit
      </Link>
    </div>
  );
}
