import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-params-todo/pictures/submit/')({
  component: QueryParamsTodoPicturesSubmit,
});

function QueryParamsTodoPicturesSubmit() {
  const payload = Route.useSearch();
  return (
    <div>
      <h1>Query Params Pictures Submit</h1>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
