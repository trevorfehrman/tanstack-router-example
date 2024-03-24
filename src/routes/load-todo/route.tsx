import { createFileRoute, Outlet } from '@tanstack/react-router';
import { todoQueryOptions } from '../../query-options';

export const Route = createFileRoute('/load-todo')({
  beforeLoad: async ({ context }) => {
    const data = await context.queryClient.ensureQueryData(todoQueryOptions);

    return {
      payload: { ...data },
    };
  },
  component: LoadTodoRoute,
});

function LoadTodoRoute() {
  return (
    <>
      <Outlet />
    </>
  );
}
