import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/pictures/submit/')({
  component: TodoPicturesSubmit,
  loader: ({ context: { payload } }) => payload,
});

function TodoPicturesSubmit() {
  const payload = Route.useLoaderData();
  return (
    <div>
      <h1>Todo Pictures Submit</h1>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
