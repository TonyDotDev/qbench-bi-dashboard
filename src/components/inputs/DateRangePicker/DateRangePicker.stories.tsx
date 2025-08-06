import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { DateRangePicker } from './DateRangePicker';
import { createTestDate } from '@/lib/date';

const meta = {
  title: 'Components/Inputs/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A date range picker component with accessibility features and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the date range picker',
    },
    value: {
      control: 'object',
      description: 'The selected date range value',
    },
    id: {
      control: 'text',
      description: 'Custom ID for the date range picker',
    },
    onSelect: {
      action: 'date range selected',
      description: 'Callback when a date range is selected',
    },
  },
  args: {
    label: 'Sample Date Range',
    value: undefined,
    onSelect: () => {},
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive story with internal state
export const Interactive: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

    return (
      <DateRangePicker
        label="Interactive Date Range Picker"
        value={dateRange}
        onSelect={setDateRange}
      />
    );
  },
};

// Basic stories
export const Default: Story = {
  args: {
    label: 'Select Date Range',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Sample Throughput Period',
  },
};

export const WithCustomId: Story = {
  args: {
    label: 'Custom ID Picker',
    id: 'custom-date-range-picker',
  },
};

// State stories
export const Empty: Story = {
  args: {
    label: 'Empty Date Range',
    value: undefined,
  },
};

export const PartialSelection: Story = {
  args: {
    label: 'Partial Selection',
    value: {
      from: createTestDate(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate()
      ),
      to: undefined,
    },
  },
};

export const CompleteSelection: Story = {
  args: {
    label: 'Complete Selection',
    value: {
      from: createTestDate(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate() - 3
      ),
      to: createTestDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()),
    },
  },
};

// Edge cases
export const LongLabel: Story = {
  args: {
    label:
      'This is a very long label that might wrap to multiple lines and test the component layout',
  },
};

export const SpecialCharacters: Story = {
  args: {
    label: 'Date Range (2024) - Sample Data',
  },
};
