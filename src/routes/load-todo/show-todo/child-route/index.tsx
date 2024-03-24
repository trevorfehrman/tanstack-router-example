import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/load-todo/show-todo/child-route/')({
  component: ChildRoute,
});

function ChildRoute() {
  return (
    <div>
      <h1>Child Route</h1>
    </div>
  );
}
