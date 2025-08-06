import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { DateRangePicker } from './DateRangePicker';
import { axe } from 'jest-axe';

import { createTestDate } from '@/lib/date';

describe('DateRangePicker', () => {
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it('should display placeholder when no value is selected', () => {
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);
    expect(screen.getByText('Select date range...')).toBeInTheDocument();
  });

  it('should display selected date range when value is provided', () => {
    const dateRange = {
      from: createTestDate(2024, 1, 1),
      to: createTestDate(2024, 1, 31),
    };
    render(<DateRangePicker label="Sample Date Range" value={dateRange} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('1/1/2024 - 1/31/2024');
  });

  it('should display partial selection when only from date is selected', () => {
    const dateRange = {
      from: createTestDate(2024, 1, 1),
      to: undefined,
    };
    render(<DateRangePicker label="Sample Date Range" value={dateRange} onSelect={mockOnSelect} />);
    expect(screen.getByText('1/1/2024 - Select end date')).toBeInTheDocument();
  });

  it('should open popover when label is clicked', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);

    const label = screen.getByText('Sample Date Range');
    await user.click(label);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should open popover when button is clicked', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button', { name: /sample date range/i });
    await user.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should close popover when clicking outside', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button', { name: /sample date range/i });
    await user.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('should update aria-expanded when popover opens', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should have proper accessibility attributes', () => {
    render(<DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('id');
    expect(button.id).toMatch(/^date-range-picker-/);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should use custom ID when provided', () => {
    render(
      <DateRangePicker
        label="Sample Date Range"
        value={undefined}
        onSelect={mockOnSelect}
        id="custom-date-picker"
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('id', 'custom-date-picker');
  });

  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <DateRangePicker label="Sample Date Range" value={undefined} onSelect={mockOnSelect} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
