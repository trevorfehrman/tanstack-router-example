import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/comments/submit')({
  component: TodoCommentsSubmitRoute,
});

function TodoCommentsSubmitRoute() {
  return <Outlet />;
}
