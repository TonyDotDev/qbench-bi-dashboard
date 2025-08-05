import { DashboardLayout } from '@/components/layouts/DashboardLayout';

export const layoutMap = {
  dashboard: DashboardLayout,
  none: ({ children }: { children: React.ReactNode }) => <>{children}</>,
} as const;
