import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/comments/submit')({
  component: QueryCacheTodoCommentsSubmitRoute,
});

function QueryCacheTodoCommentsSubmitRoute() {
  return <Outlet />;
}
