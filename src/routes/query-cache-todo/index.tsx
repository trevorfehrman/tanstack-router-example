import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/')({
  component: QueryCacheTodo,
});

function QueryCacheTodo() {
  const ctx = Route.useRouteContext();
  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const todo = todoQuery.data;
  return (
    <div>
      <h1>Query Cache Todo</h1>
      <h2>
        ID: {todo.id} User ID: {todo.userId} Completed: {todo.completed} Title: {todo.title}{' '}
      </h2>
      <Link to='/query-cache-todo/comments' from={Route.fullPath}>
        Comments
      </Link>
      <Link to='/query-cache-todo/pictures' from={Route.fullPath}>
        Pictures
      </Link>
    </div>
  );
}
