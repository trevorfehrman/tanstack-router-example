import { Outlet, createFileRoute } from '@tanstack/react-router';
import { commentsQueryOptions } from '../../-queries/comments-query-options';
import { todoSchema } from '../../-queries/todo-query-options';

export const Route = createFileRoute('/query-params-todo/comments')({
  validateSearch: todoSchema,
  beforeLoad: () => ({ commentsQueryOptions }),
  loader: async ({ context }) => context.queryClient.ensureQueryData(commentsQueryOptions),
  component: QueryParamsCommentsRoute,
});

function QueryParamsCommentsRoute() {
  return <Outlet />;
}
