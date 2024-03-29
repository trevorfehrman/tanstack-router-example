import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/todo' className='[&.active]:font-bold'>
          Tanstack Context Example
        </Link>
        <Link to='/query-params-todo/' className='[&.active]:font-bold'>
          Query Params Example
        </Link>
        <Link to='/query-cache-todo' className='[&.active]:font-bold'>
          Query Cache Example
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
