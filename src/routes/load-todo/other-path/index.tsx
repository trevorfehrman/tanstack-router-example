import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/load-todo/other-path/')({
  loader: ({
    context: {
      payload: { photos },
    },
  }) => ({ photos }),
  component: OtherPath,
});

function OtherPath() {
  const { photos } = useLoaderData({ from: Route.fullPath });
  return (
    <div className='p-2'>
      <h3>Other Path</h3>
      <div>
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </div>
  );
}
