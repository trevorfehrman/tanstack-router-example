import { Outlet, createFileRoute } from '@tanstack/react-router';
import { todoQueryOptions } from '../-queries/todo-query-options';

export const Route = createFileRoute('/query-cache-todo')({
  beforeLoad: () => ({ todoQueryOptions }),
  loader: ({ context }) => context.queryClient.ensureQueryData(todoQueryOptions),
  component: QueryCacheTodoRoute,
});

function QueryCacheTodoRoute() {
  return <Outlet />;
}
