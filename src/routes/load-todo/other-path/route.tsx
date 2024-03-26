import { Outlet, createFileRoute } from '@tanstack/react-router';
import { photosQueryOptions } from './-queries/photos-query-options';

export const Route = createFileRoute('/load-todo/other-path')({
  beforeLoad: async ({ context }) => {
    const photos = await context.queryClient.ensureQueryData(photosQueryOptions);

    return {
      payload: { ...context.payload, photos },
    };
  },

  component: OtherPathRoute,
});

function OtherPathRoute() {
  return <Outlet />;
}
