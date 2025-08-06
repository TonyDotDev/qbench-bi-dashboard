import { createContext, useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';

const DashboardContext = createContext<
  { dateRange: DateRange; setDateRange: (dateRange: DateRange) => void } | undefined
>(undefined);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const value = useMemo(() => ({ dateRange, setDateRange }), [dateRange]);

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export { DashboardContext };
