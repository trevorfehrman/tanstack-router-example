import { createFileRoute, Outlet } from '@tanstack/react-router';
import { todoQueryOptions } from './-queries/todo-query-options';

export const Route = createFileRoute('/load-todo')({
  beforeLoad: async ({ context }) => {
    const data = await context.queryClient.ensureQueryData(todoQueryOptions);
    return {
      payload: { ...data },
    };
  },
  component: LoadTodoRoute,
  errorComponent: () => <div>Load Todo Error</div>,
});

function LoadTodoRoute() {
  return <Outlet />;
}
