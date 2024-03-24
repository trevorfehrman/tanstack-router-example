import { createFileRoute, Outlet } from '@tanstack/react-router';
import { commentsQueryOptions } from '../../../query-options';

export const Route = createFileRoute('/load-todo/show-todo')({
  beforeLoad: async ({ context }) => {
    const comments = await context.queryClient.ensureQueryData(commentsQueryOptions);

    return {
      payload: { ...context.payload, comments },
    };
  },
  component: ShowTodoRoute,
});

function ShowTodoRoute() {
  return (
    <>
      <Outlet />
    </>
  );
}
