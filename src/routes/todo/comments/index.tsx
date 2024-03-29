import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/comments/')({
  component: Comments,
  pendingComponent: () => <div>Show Todo Loading...</div>,
  errorComponent: ({ error }) => (
    <div>
      Show Todo Error: <pre>{JSON.stringify(error)}</pre>
    </div>
  ),
  loader: ({ context: { payload } }) => payload,
});

function Comments() {
  const { id, title, completed, userId, comments } = Route.useLoaderData();
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
      <Link to='/todo/comments/submit/' from={Route.fullPath}>
        Submit
      </Link>
    </div>
  );
}
