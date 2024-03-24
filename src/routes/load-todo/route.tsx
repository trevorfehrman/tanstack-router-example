import { createFileRoute, Outlet } from '@tanstack/react-router';
import { todoQueryOptions } from '../../query-options';

export const Route = createFileRoute('/load-todo')({
  beforeLoad: ({ context }) => context.queryClient.ensureQueryData(todoQueryOptions),
  component: LoadTodo,
});

function LoadTodo() {
  return (
    <>
      <Outlet />
    </>
  );
}
