import { Navigate, useLocation } from 'react-router-dom';

import { useMockAuth, type UserRole } from '@/lib/auth/useMockAuth';

import { paths } from './paths';

type RouteGuardProps = {
  allowedRoles?: UserRole[];
  children: React.ReactNode;
};

export const RouteGuard = ({ allowedRoles, children }: RouteGuardProps) => {
  const location = useLocation();
  const { isAuthenticated, role } = useMockAuth();

  if (!isAuthenticated) {
    return <Navigate to={paths.login} state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={paths.unauthorized} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
