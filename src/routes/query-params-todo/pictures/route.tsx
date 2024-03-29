import { Outlet, createFileRoute } from '@tanstack/react-router';
import { todoSchema } from '../../-queries/todo-query-options';
import { photosQueryOptions } from '../../-queries/photos-query-options';

export const Route = createFileRoute('/query-params-todo/pictures')({
  validateSearch: todoSchema,
  beforeLoad: () => ({ photosQueryOptions }),
  loader: ({ context }) => context.queryClient.ensureQueryData(photosQueryOptions),
  component: QueryParamsTodoPicturesRoute,
});

function QueryParamsTodoPicturesRoute() {
  return <Outlet />;
}
