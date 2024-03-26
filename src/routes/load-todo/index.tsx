import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute, useLoaderData } from '@tanstack/react-router';
import { todoQueryOptions } from './-queries/todo-query-options';
import { ExampleComponent } from './-components/ExampleComponent';

export const Route = createFileRoute('/load-todo/')({
  component: LoadTodo,
  pendingComponent: () => <div>Load Todo Loading...</div>,
  // why doesn't this error component get rendered when an error is thrown
  errorComponent: ({ error }) => {
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return <div>Load Todo Error: {errorMessage}</div>;
  },
  loader: ({ context: { payload } }) => payload,
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
      <Link to='/load-todo/other-path/' from={Route.fullPath}>
        Other Path
      </Link>
      <ExampleComponent />
      {todo.isError && <strong className='text-red-600'>{todo.error?.message}</strong>}
    </div>
  );
}
