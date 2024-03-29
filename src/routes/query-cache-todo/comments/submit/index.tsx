import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/comments/submit/')({
  component: QueryCacheTodoCommentsSubmit,
});

function QueryCacheTodoCommentsSubmit() {
  const ctx = Route.useRouteContext();

  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const commentsQuery = useSuspenseQuery(ctx.commentsQueryOptions);

  const todo = todoQuery.data;
  const comments = commentsQuery.data;

  const payload = { todo, comments };

  return (
    <div>
      <h1>Query Cache Todo Comments Submit</h1>
      <pre>{JSON.stringify(payload)}</pre>
    </div>
  );
}
