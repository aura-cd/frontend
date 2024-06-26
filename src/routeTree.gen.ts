/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as routeImport } from './routes/__route';

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')();

// Create/Update Routes

const routeRoute = routeImport.update({
  id: '/__route',
  getParentRoute: () => rootRoute,
} as any);

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/__route': {
      preLoaderRoute: typeof routeImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexLazyRoute]);

/* prettier-ignore-end */
