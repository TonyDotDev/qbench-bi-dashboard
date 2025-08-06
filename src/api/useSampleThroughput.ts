import { useState, useEffect, useCallback } from 'react';

import {
  fetchSampleThroughput,
  type SampleThroughputData,
  type DateRangeFilter,
} from './sampleThroughputApi';

export interface UseSampleThroughputReturn {
  data: SampleThroughputData[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useSampleThroughput(dateRange?: DateRangeFilter): UseSampleThroughputReturn {
  const [data, setData] = useState<SampleThroughputData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchSampleThroughput(dateRange);
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [dateRange]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
