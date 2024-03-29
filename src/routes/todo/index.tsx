import { useSuspenseQuery } from '@tanstack/react-query';
import { ErrorComponent, Link, createFileRoute, useLoaderData } from '@tanstack/react-router';
import { todoQueryOptions } from '../-queries/todo-query-options';
import { ExampleComponent } from '../-components/ExampleComponent';

export const Route = createFileRoute('/todo/')({
  component: Todo,
  pendingComponent: () => <div>Index Load Todo Loading...</div>,
  loader: ({ context: { payload } }) => payload,
  errorComponent: ({ error }) => (
    <>
      Index Error Component
      <ErrorComponent error={error} />,
    </>
  ),
});

function Todo() {
  const todo = useSuspenseQuery(todoQueryOptions);
  const { id, title, completed, userId } = useLoaderData({ from: Route.fullPath });

  return (
    <div>
      <h1>Load Todo</h1>
      <h2>{JSON.stringify(todo.data)}</h2>
      <h3>
        ID: {id} Title: {title} Completed: {completed} User ID: {userId}
      </h3>
      <Link to='/todo/comments/' from={Route.fullPath}>
        Comments
      </Link>
      <Link to='/todo/pictures/' from={Route.fullPath}>
        Pictures
      </Link>
      <ExampleComponent />
      {todo.isError && <strong className='text-red-600'>{todo.error?.message}</strong>}
    </div>
  );
}
