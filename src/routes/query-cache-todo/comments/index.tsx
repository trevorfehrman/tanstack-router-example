import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/comments/')({
  component: QueryCacheTodoCommentsRoute,
});

function QueryCacheTodoCommentsRoute() {
  const ctx = Route.useRouteContext();

  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const commentsQuery = useSuspenseQuery(ctx.commentsQueryOptions);

  const todo = todoQuery.data;
  const comments = commentsQuery.data;
  return (
    <div>
      <h1>Query Cache Comments</h1>
      <h2>
        ID: {todo.id} User ID: {todo.userId} Completed: {todo.completed} Title: {todo.title}{' '}
      </h2>

      <h2>
        {comments.map(comment => (
          <div key={comment.id}>
            <h3>{comment.body}</h3>
            <h3>{comment.email}</h3>
            <h3>{comment.name}</h3>
            <h3>{comment.postId}</h3>
            <h3>{comment.id}</h3>
          </div>
        ))}
      </h2>
      <Link to='./submit' from={Route.fullPath}>
        Submit
      </Link>
    </div>
  );
}
