import { format, set, parseISO, isAfter, isBefore, startOfDay, endOfDay } from 'date-fns';

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
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
};

export const getToday = (): Date => {
  const now = new Date();
  return set(now, {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
};

export const parseApiDate = (dateString: string): Date => {
  return parseISO(dateString);
};

export const isDateInRange = (date: Date, from?: Date, to?: Date): boolean => {
  const dateStart = startOfDay(date);

  if (from) {
    const fromStart = startOfDay(from);
    if (isBefore(dateStart, fromStart)) {
      return false;
    }
  }

  if (to) {
    const toEnd = endOfDay(to);
    if (isAfter(dateStart, toEnd)) {
      return false;
    }
  }

  return true;
};
