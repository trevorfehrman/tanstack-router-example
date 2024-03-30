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
    <div className='flex flex-col gap-y-5'>
      <h1>Query Cache Comments</h1>
      <h2 className='font-bold'>Todo Data: </h2>
      <p>
        <span className='italic'>ID: </span>
        {todo.id}
      </p>
      <p>
        <span className='italic'>User ID: </span>
        {todo.userId}
      </p>
      <p>
        <span className='italic'>Completed: </span>
        {todo.completed ? 'Yes' : 'No'}
      </p>
      <p>
        <span className='italic'>Title: </span>
        {todo.title}
      </p>

      <h3 className='font-bold'>Comments:</h3>
      <ul className='flex flex-col gap-y-4'>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>
              <span className='italic'>ID: </span>
              {comment.id}
            </p>
            <p>
              <span className='italic'>Post ID: </span>
              {comment.postId}
            </p>
            <p>
              <span className='italic'>Name: </span>
              {comment.name}
            </p>
            <p>
              <span className='italic'>Email: </span>
              {comment.email}
            </p>
            <p>
              <span className='italic'>Body: </span>
              {comment.body}
            </p>
          </li>
        ))}
      </ul>
      <div className='mb-10'>
        <Link
          to='./submit'
          from={Route.fullPath}
          className='uppercase border rounded p-2 hover:bg-slate-400 transition-all'
        >
          Submit
        </Link>
      </div>
    </div>
  );
}
