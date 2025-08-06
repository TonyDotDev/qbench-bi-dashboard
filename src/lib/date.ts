import { format, set } from 'date-fns';

// Date formatting utilities
export const formatDate = (date: Date, formatString: string = 'M/d/yyyy'): string => {
  return format(date, formatString);
};

export const formatDateRange = (
  from: Date,
  to: Date,
  formatString: string = 'M/d/yyyy'
): string => {
  return `${formatDate(from, formatString)} - ${formatDate(to, formatString)}`;
};

export const createTestDate = (year: number, month: number, day: number): Date => {
  return set(new Date(), {
    year,
    month: month - 1,
    date: day,
    hours: 12,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
};
