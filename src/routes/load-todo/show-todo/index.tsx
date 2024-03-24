import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/load-todo/show-todo/')({
  component: ShowTodo,
  loader: ({ context: { id, completed, title, userId } }) => ({ id, completed, title, userId }),
});

function ShowTodo() {
  const { id, title, completed, userId } = useLoaderData({ from: '/load-todo/show-todo/' });

  return (
    <div>
      <h1>Show Todo</h1>
      <h3>
        ID: {id} Title: {title} Completed: {completed} User ID: {userId}
      </h3>
    </div>
  );
}
