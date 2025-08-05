import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { applyGuardsAndLayouts } from './applyGuardsAndLayouts';
import { routes } from './routes';

export const AppRouter = () => {
  const guardedRoutes = applyGuardsAndLayouts(routes);
  const element = useRoutes(guardedRoutes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};
