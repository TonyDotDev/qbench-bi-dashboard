export type UserRole = 'admin' | 'viewer' | 'lab-tech' | null;

export function useMockAuth() {
  const user = {
    isAuthenticated: true,
    role: 'admin' as UserRole,
  };

  return user;
}
