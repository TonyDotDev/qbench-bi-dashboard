'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';
import type { DateRange } from 'react-day-picker';

import { Label, Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';

import { formatDateRangeValue } from './formatDateRangeValue';

interface DateRangePickerProps {
  label: string;
  value: DateRange | undefined;
  onSelect: (value: DateRange | undefined) => void;
  id?: string;
}

export const DateRangePicker = ({ label, value, onSelect, id }: DateRangePickerProps) => {
  const [open, setOpen] = React.useState(false);
  const { from, to } = value || {};

  const uniqueId = React.useId();
  const datePickerId = id || `date-range-picker-${uniqueId}`;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={datePickerId} className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id={datePickerId} className="justify-between font-normal">
            {formatDateRangeValue(from, to)}
            <ChevronDownIcon aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            selected={{ from, to }}
            captionLayout="dropdown"
            onSelect={onSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
