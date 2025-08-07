import type { DateRange } from 'react-day-picker';

import { Typography } from '@/components/Typography';
import { DateRangePicker } from '@/components/inputs';
import { useDashboardContext } from '@/context';

export const DashboardLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  const { dateRange, setDateRange } = useDashboardContext();

  const handleDateRangeChange = (dateRange: DateRange | undefined) => {
    if (!dateRange) return;

    setDateRange(dateRange);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-between items-center px-6 py-4 shadow-2xl border-b border-border">
        <div>
          <Typography variant="h1" size="2xl" className="text-center md:text-left">
            {title || 'Dashboard'}
          </Typography>
          <Typography variant="muted" color="muted" size="sm" className="text-center md:text-left">
            {description || 'QBench case study demo dashboard'}
          </Typography>
        </div>
        <DateRangePicker
          label="Sample Date Range"
          value={dateRange}
          onSelect={handleDateRangeChange}
        />
      </header>
      <main className="flex-1 p-2 lg:p-6 bg-slate-100">{children}</main>
    </div>
  );
};
