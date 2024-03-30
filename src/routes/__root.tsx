import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className='p-4'>
      <div className='flex gap-x-5 mb-4'>
        <Link to='/' className='[&.active]:font-bold hover:underline'>
          Home
        </Link>
        <Link to='/todo' className='[&.active]:font-bold hover:underline'>
          Tanstack Context Example
        </Link>
        <Link to='/query-params-todo/' className='[&.active]:font-bold hover:underline'>
          Query Params Example
        </Link>
        <Link to='/query-cache-todo' className='[&.active]:font-bold hover:underline'>
          Query Cache Example
        </Link>
      </div>
      <hr className='mb-4' />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
