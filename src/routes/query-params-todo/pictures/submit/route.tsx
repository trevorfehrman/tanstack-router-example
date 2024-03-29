import { Outlet, createFileRoute } from '@tanstack/react-router';
import { todoSchema } from '../../../-queries/todo-query-options';
import { z } from 'zod';
import { photosSchema } from '../../../-queries/photos-query-options';

const queryParamsTodoPicturesSchema = todoSchema.merge(z.object({ photos: photosSchema }));

export const Route = createFileRoute('/query-params-todo/pictures/submit')({
  validateSearch: queryParamsTodoPicturesSchema,
  component: QueryParamsTodoPicturesSubmitRoute,
});

function QueryParamsTodoPicturesSubmitRoute() {
  return <Outlet />;
}
