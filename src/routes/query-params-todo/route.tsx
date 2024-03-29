import { Outlet, createFileRoute } from '@tanstack/react-router';
import { todoQueryOptions } from '../-queries/todo-query-options';

export const Route = createFileRoute('/query-params-todo')({
  beforeLoad: () => ({ todoQueryOptions }),
  loader: async ({ context }) => context.queryClient.ensureQueryData(todoQueryOptions),
  component: LoadTodoQueryParamRoute,
});

function LoadTodoQueryParamRoute() {
  return <Outlet />;
}
