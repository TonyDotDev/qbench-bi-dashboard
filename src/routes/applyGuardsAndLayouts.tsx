import { type RouteObject } from 'react-router-dom';

import type { UserRole } from '@/lib/auth/useMockAuth';
import { layoutMap } from '@/routes/layouts';

import { RouteGuard } from './RouteGuard';

export type MetaRouteObject = RouteObject & {
  meta?: {
    layout?: keyof typeof layoutMap;
    requiresAuth?: boolean;
    roles?: UserRole[];
    title?: string;
    description?: string;
  };
};

export const applyGuardsAndLayouts = (routes: MetaRouteObject[]) => {
  return routes.map((route) => {
    const { meta = {} } = route;

    const Layout = layoutMap[meta.layout ?? 'none'];
    const needsGuard = meta.requiresAuth || !!meta.roles;

    let element = (
      <Layout title={meta.title} description={meta.description}>
        {route.element}
      </Layout>
    );

    if (needsGuard) {
      element = <RouteGuard allowedRoles={meta.roles}>{element}</RouteGuard>;
    }

    return {
      ...route,
      element,
    };
  });
};
