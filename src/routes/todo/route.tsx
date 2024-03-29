import { createFileRoute, ErrorComponent, Outlet } from '@tanstack/react-router';
import { todoQueryOptions } from '../-queries/todo-query-options';

export const Route = createFileRoute('/todo')({
  beforeLoad: async ({ context }) => {
    const data = await context.queryClient.ensureQueryData(todoQueryOptions);
    return {
      payload: { ...data },
    };
  },
  component: TodoRoute,
  loader: async ({ context }) => {
    return context.payload;
  },
  pendingComponent: () => <div>Route Todo Loading...</div>,
  errorComponent: ({ error }) => (
    <>
      Route Error Component:
      <ErrorComponent error={error} />,
    </>
  ),
});

function TodoRoute() {
  return <Outlet />;
}
