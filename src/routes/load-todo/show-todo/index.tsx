import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import { todoSchema } from '../../../schemas';
import { router } from '../../../main';
// import { router } from '../../../main';

export const Route = createFileRoute('/load-todo/show-todo/')({
  component: ShowTodo,
  validateSearch: todoSchema,
  loader: ({ context }) => {
    console.log(context);
    // console.log(x, 'from show-todo');
    // loader: ({context}) => {
    // context.search.completed
    // router.navigate({to: '/', from: Route.fullPath, search: (prev) => ({...prev})})
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
