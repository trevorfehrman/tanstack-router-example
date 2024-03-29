import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/comments/submit/')({
  component: TodoCommentsSubmit,
  loader: ({ context: { payload } }) => payload,
});

function TodoCommentsSubmit() {
  const payload = Route.useLoaderData();
  return (
    <div>
      <h1>Todo Comments Submit</h1>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
