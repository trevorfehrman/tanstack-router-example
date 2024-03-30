import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { routeTree } from './routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

type MyQueryMeta = {
  queryMessage: string;
};

type MyMutationMeta = {
  mutationMessage: string;
};

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: MyQueryMeta;
    mutationMeta: MyMutationMeta;
  }
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error(error, query);
    },
    onSuccess: (data, query) => {
      console.log(
        `[SUCCESS] -- ${query.queryHash} -- ${query.meta?.queryMessage} -- ${JSON.stringify(data)}`
      );
    },
  }),
  defaultOptions: {
    queries: {
      throwOnError: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

// Create a new router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Default Loading...</div>,
  defaultNotFoundComponent: () => <div>Default Not Found</div>,
  defaultErrorComponent: () => <div>Default error</div>,
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} client={queryClient} position='right' />
    </QueryClientProvider>
  </React.StrictMode>
);
