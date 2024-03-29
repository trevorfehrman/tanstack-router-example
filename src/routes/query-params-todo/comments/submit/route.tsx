import { Outlet, createFileRoute } from '@tanstack/react-router';
import { todoSchema } from '../../../-queries/todo-query-options';
import { z } from 'zod';
import { commentsSchema } from '../../../-queries/comments-query-options';

const queryParamsTodoCommentsSchema = todoSchema.merge(z.object({ comments: commentsSchema }));

export const Route = createFileRoute('/query-params-todo/comments/submit')({
  validateSearch: queryParamsTodoCommentsSchema,
  component: QueryParamsTodoCommentsSubmitRoute,
});

function QueryParamsTodoCommentsSubmitRoute() {
  return <Outlet />;
}
