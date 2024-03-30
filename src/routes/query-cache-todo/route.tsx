import { ErrorComponent, Outlet, createFileRoute } from '@tanstack/react-router';
import { todoQueryOptions } from '../-queries/todo-query-options';

export const Route = createFileRoute('/query-cache-todo')({
  beforeLoad: () => ({ todoQueryOptions }),
  loader: ({ context }) => context.queryClient.ensureQueryData(todoQueryOptions),

  pendingComponent: () => <div>Query Cache Todo Pending...</div>,
  errorComponent: ({ error }) => <ErrorComponent error={error} />,

  component: QueryCacheTodoRoute,
});

function QueryCacheTodoRoute() {
  return (
    <>
      <h1 className='text-lg uppercase'>Query Cache Example</h1>
      <Outlet />
    </>
  );
}
