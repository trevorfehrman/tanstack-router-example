import { Link, createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/pictures/')({
  loader: ({
    context: {
      payload: { photos },
    },
  }) => ({ photos }),
  component: Pictures,
});

function Pictures() {
  const { photos } = useLoaderData({ from: Route.fullPath });
  return (
    <div className='p-2'>
      <h3>Other Path</h3>
      <div>
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
      <Link to='/todo/pictures/submit' from={Route.fullPath}>
        Submit
      </Link>
    </div>
  );
}
