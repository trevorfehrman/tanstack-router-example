import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-params-todo/')({
  component: LoadTodoQueryParam,
});

function LoadTodoQueryParam() {
  const ctx = Route.useRouteContext();
  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const { completed, id, title, userId } = todoQuery.data;

  return (
    <div>
      <h1>Load Todo Query Params</h1>
      <h2>
        Completed: {completed} ID: {id} Title: {title} UserID: {userId}
      </h2>
      <Link
        to='/query-params-todo/comments'
        from={Route.fullPath}
        search={prev => ({ ...prev, completed, id, title, userId })}
      >
        Comments
      </Link>
      <Link
        to='/query-params-todo/pictures'
        from={Route.fullPath}
        search={prev => ({ ...prev, completed, id, title, userId })}
      >
        Pictures
      </Link>
    </div>
  );
}
