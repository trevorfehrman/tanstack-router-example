import { Outlet, createFileRoute } from '@tanstack/react-router';
import { commentsQueryOptions } from '../../-queries/comments-query-options';

export const Route = createFileRoute('/query-cache-todo/comments')({
  beforeLoad: () => ({ commentsQueryOptions }),
  loader: ({ context }) => context.queryClient.ensureQueryData(commentsQueryOptions),
  component: QueryCacheTodoCommentsRoute,
});

function QueryCacheTodoCommentsRoute() {
  return <Outlet />;
}
