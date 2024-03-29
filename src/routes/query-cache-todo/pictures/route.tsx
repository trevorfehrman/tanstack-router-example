import { Outlet, createFileRoute } from '@tanstack/react-router';
import { photosQueryOptions } from '../../-queries/photos-query-options';

export const Route = createFileRoute('/query-cache-todo/pictures')({
  loader: ({ context }) => context.queryClient.ensureQueryData(photosQueryOptions),
  beforeLoad: () => ({ photosQueryOptions }),
  component: QueryCacheTodoPicturesRoute,
});

function QueryCacheTodoPicturesRoute() {
  return <Outlet />;
}
