import { lazy } from 'react';

import { type MetaRouteObject } from './applyGuardsAndLayouts';
import { paths } from './paths';

const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const UnauthorizedPage = lazy(() => import('@/pages/UnauthorizedPage'));

export const routes: MetaRouteObject[] = [
  {
    path: paths.home,
    element: <DashboardPage />,
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      roles: ['admin'],
      title: 'Sample Throughput Dashboard',
      description: 'QBench case study demo dashboard',
    },
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.unauthorized,
    element: <UnauthorizedPage />,
  },
];
