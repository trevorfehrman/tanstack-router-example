import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/pictures/submit')({
  component: QueryCacheTodoPicturesSubmitRoute,
});

function QueryCacheTodoPicturesSubmitRoute() {
  return <Outlet />;
}
