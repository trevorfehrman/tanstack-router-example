import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { todoSchema } from '../../schemas';

const todoQueryOptions = queryOptions({
  queryKey: ['todo'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    const validatedData = todoSchema.parse(data);
    return validatedData;
  },
});

export const Route = createFileRoute('/load-todo/')({
  component: LoadTodo,
  beforeLoad: () => ({ foo: 'bar' }),
  // This context correctly has `{foo: string}` merged to it
  loader: ({ context }) => context.queryClient.ensureQueryData(todoQueryOptions),
});

function LoadTodo() {
  const todo = useSuspenseQuery(todoQueryOptions);

  return (
    <div>
      <h1>Load Todo</h1>
      <h2>{JSON.stringify(todo.data)}</h2>
      <Link
        to='/load-todo/show-todo/'
        from={Route.fullPath}
        search={prev => ({ ...prev, ...todo.data })}
      >
        Show Todo
      </Link>
    </div>
  );
}
