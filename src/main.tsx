import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { routeTree } from './routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      console.error(error);
    },
    onSuccess: data => {
      console.log(data);
    },
  }),
});

// Create a new router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultNotFoundComponent: () => <div>Not Found</div>,
  defaultPreloadStaleTime: 0,
  // defaultPendingMs: 0,
  context: {
    queryClient,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);