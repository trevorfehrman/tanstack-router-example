import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/pictures/submit')({
  component: TodoPicturesSubmitRoute,
});

function TodoPicturesSubmitRoute() {
  return <Outlet />;
}
