import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute, useLoaderData } from '@tanstack/react-router';
import { todoQueryOptions } from '../../query-options';

export const Route = createFileRoute('/load-todo/')({
  component: LoadTodo,
  loader: ({ context: { id, completed, title, userId } }) => ({ id, completed, title, userId }),
});

function LoadTodo() {
  const todo = useSuspenseQuery(todoQueryOptions);
  const { id, title, completed, userId } = useLoaderData({ from: Route.fullPath });

  return (
    <div>
      <h1>Load Todo</h1>
      <h2>{JSON.stringify(todo.data)}</h2>
      <h3>
        ID: {id} Title: {title} Completed: {completed} User ID: {userId}
      </h3>
      <Link to='/load-todo/show-todo/' from={Route.fullPath}>
        Show Todo
      </Link>
    </div>
  );
}
