/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as LoadTodoIndexImport } from './routes/load-todo/index'
import { Route as LoadTodoShowTodoIndexImport } from './routes/load-todo/show-todo/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoadTodoIndexRoute = LoadTodoIndexImport.update({
  path: '/load-todo/',
  getParentRoute: () => rootRoute,
} as any)

const LoadTodoShowTodoIndexRoute = LoadTodoShowTodoIndexImport.update({
  path: '/load-todo/show-todo/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/load-todo/': {
      preLoaderRoute: typeof LoadTodoIndexImport
      parentRoute: typeof rootRoute
    }
    '/load-todo/show-todo/': {
      preLoaderRoute: typeof LoadTodoShowTodoIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoadTodoIndexRoute,
  LoadTodoShowTodoIndexRoute,
])

/* prettier-ignore-end */
