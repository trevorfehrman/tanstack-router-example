import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-params-todo/comments/submit/')({
  component: QueryParamsTodoCommentsSubmit,
});

function QueryParamsTodoCommentsSubmit() {
  const payload = Route.useSearch();
  return (
    <div>
      <div>Hello Query Params Todo Comments Submit!</div>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
