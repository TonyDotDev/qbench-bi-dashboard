import { useSampleThroughput } from '@/api';
import { DashboardCard } from '@/components/cards';
import { LineChart } from '@/components/charts';
import { DataTable } from '@/components/tables';
import type { ChartConfig } from '@/components/ui';
import { useDashboardContext } from '@/context';

const DashboardPage = () => {
  const { dateRange } = useDashboardContext();
  const { data, loading, error } = useSampleThroughput(dateRange);

  const chartConfig = {
    count: {
      label: 'Samples Processed',
      color: 'var(--color-chart-1)',
    },
  } satisfies ChartConfig;

  const columns = [
    {
      header: 'Lab',
      accessorKey: 'lab',
    },
    {
      header: 'Type',
      accessorKey: 'sample_type',
    },
    {
      header: 'Date',
      accessorKey: 'date',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Count',
      accessorKey: 'count',
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-2 lg:gap-6">
      {loading && <div className="col-span-12">Loading...</div>}
      {error && !loading && <div className="col-span-12">Error: {error}</div>}
      {!loading && !error && (
        <>
          <DashboardCard title="Samples Processed Per Day" span={{ default: 12 }}>
            <LineChart
              chartConfig={chartConfig}
              chartData={data}
              xAxisKey="date"
              yAxisKey="count"
            />
          </DashboardCard>
          <DashboardCard title="Sample Breakdown By Location And Type" span={{ default: 12 }}>
            <DataTable columns={columns} data={data} />
          </DashboardCard>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
