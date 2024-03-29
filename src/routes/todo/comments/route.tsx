import { createFileRoute, Outlet } from '@tanstack/react-router';
import { commentsQueryOptions } from '../../-queries/comments-query-options';

export const Route = createFileRoute('/todo/comments')({
  beforeLoad: async ({ context }) => {
    const comments = await context.queryClient.ensureQueryData(commentsQueryOptions);

    return {
      payload: { ...context.payload, comments },
    };
  },
  component: CommentsRoute,
});

function CommentsRoute() {
  return <Outlet />;
}
