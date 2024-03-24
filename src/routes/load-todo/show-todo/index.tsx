import { createFileRoute } from '@tanstack/react-router';
import { todoSchema } from '../../../schemas';

export const Route = createFileRoute('/load-todo/show-todo/')({
  component: ShowTodo,
  validateSearch: todoSchema,
  loader: ({ context }) => {
    // Shouldn't this type have `{foo: string}` merged to it?
    console.log(context);
  },
});

function ShowTodo() {
  const search = Route.useSearch();
  return (
    <div>
      <h1>Show Todo</h1>
      <h2>Search: {JSON.stringify(search)}</h2>
    </div>
  );
}
