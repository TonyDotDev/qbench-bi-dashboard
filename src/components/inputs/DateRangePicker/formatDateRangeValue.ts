import { formatDate, formatDateRange } from '@/lib/date';

export const formatDateRangeValue = (from: Date | undefined, to: Date | undefined) => {
  if (!from && !to) return 'Select date range...';
  if (from && !to) return `${formatDate(from)} - Select end date`;
  if (from && to) return formatDateRange(from, to);
  return 'Select date range...';
};
