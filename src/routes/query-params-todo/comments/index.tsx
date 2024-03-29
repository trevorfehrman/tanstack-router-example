import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-params-todo/comments/')({
  component: QueryParamsComments,
});

function QueryParamsComments() {
  const ctx = Route.useRouteContext();
  const commentsQuery = useSuspenseQuery(ctx.commentsQueryOptions);
  const comments = commentsQuery.data;
  return (
    <div>
      <h1>Query Params Comments</h1>
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
      <Link
        from={Route.fullPath}
        to='/query-params-todo/comments/submit'
        search={prev => ({ ...prev, comments })}
      >
        Submit
      </Link>
    </div>
  );
}
