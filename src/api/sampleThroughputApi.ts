import { parseApiDate, isDateInRange } from '@/lib/date';

import sampleData from './sample_throughput_data.json';

export interface SampleThroughputData {
  date: string;
  lab: string;
  sample_type: string;
  count: number;
  status: 'complete' | 'processing' | 'pending' | 'failed';
}

export interface DateRangeFilter {
  from?: Date;
  to?: Date;
}

const MOCK_DELAY = 300;

export async function fetchSampleThroughput(
  dateRange?: DateRangeFilter
): Promise<SampleThroughputData[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  let filteredData = sampleData as SampleThroughputData[];

  if (dateRange) {
    filteredData = filteredData.filter((item) => {
      const itemDate = parseApiDate(item.date);
      return isDateInRange(itemDate, dateRange.from, dateRange.to);
    });
  }

  return filteredData;
}
