import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/query-cache-todo/')({
  component: QueryCacheTodo,
});

function QueryCacheTodo() {
  const ctx = Route.useRouteContext();
  const todoQuery = useSuspenseQuery(ctx.todoQueryOptions);
  const todo = todoQuery.data;

  return (
    <div className='flex flex-col gap-y-5'>
      <h1>Query Cache Todo</h1>
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

      <div className='flex gap-x-4'>
        <Link
          to='./comments'
          from={Route.fullPath}
          className='uppercase border rounded p-2 hover:bg-slate-400 transition-all'
        >
          Comments
        </Link>
        <Link
          to='./pictures'
          from={Route.fullPath}
          className='uppercase border rounded p-2 hover:bg-slate-400 transition-all'
        >
          Pictures
        </Link>
      </div>
    </div>
  );
}
