import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/load-todo/show-todo/')({
  component: ShowTodo,
  pendingComponent: () => <div>Show Todo Loading...</div>,
  errorComponent: ({ error }) => (
    <div>
      Show Todo Error: <pre>{JSON.stringify(error)}</pre>
    </div>
  ),
  loader: ({ context: { payload } }) => payload,
});

function ShowTodo() {
  const { id, title, completed, userId, comments } = useLoaderData({
    from: Route.fullPath,
  });

  return (
    <div>
      <h1>Show Todo</h1>
      <h3>
        ID: {id} Title: {title} Completed: {completed} User ID: {userId}
      </h3>
      <div>
        <h2>Comments</h2>
        {comments.map(comment => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
