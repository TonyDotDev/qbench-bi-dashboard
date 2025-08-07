import { CartesianGrid, Line, LineChart as RCLineChart, XAxis, Tooltip, YAxis } from 'recharts';

import { ChartContainer, type ChartConfig } from '@/components/ui';
interface LineChartProps<T> {
  chartConfig: ChartConfig;
  chartData: T[];
  xAxisKey: string;
  yAxisKey: string;
  showMonthlyTicks?: boolean;
}

export const LineChart = <T,>({
  chartConfig,
  chartData,
  xAxisKey,
  yAxisKey,
}: LineChartProps<T>) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
      const data = payload[0].payload;

      return (
        <div
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md"
          role="tooltip"
          aria-label={`Data point details for ${label}`}
        >
          <h3 className="font-semibold text-gray-900" id="tooltip-title">
            {label}
          </h3>
          <div
            className="text-sm border-l-2 border-gray-200 pl-3"
            role="region"
            aria-labelledby="tooltip-title"
          >
            <dl className="space-y-1">
              <div className="flex justify-between items-center">
                <dt className="font-medium text-gray-900">Laboratory:</dt>
                <dd className="text-gray-700">{data.lab}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium text-gray-900">Status:</dt>
                <dd>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      data.status === 'complete'
                        ? 'bg-success-100 text-success-800'
                        : data.status === 'processing'
                        ? 'bg-blue-100 text-blue-800'
                        : data.status === 'pending'
                        ? 'bg-warning-100 text-warning-800'
                        : 'bg-error-100 text-error-800'
                    }`}
                    aria-label={`Status: ${data.status}`}
                  >
                    {data.status}
                  </span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium text-gray-900">Sample Type:</dt>
                <dd className="text-gray-700">{data.sample_type}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium text-gray-900">Count:</dt>
                <dd className="text-gray-700 font-semibold">{data.count}</dd>
              </div>
            </dl>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer className="h-80 w-full md:max-h-40 md:w-full" config={chartConfig}>
      <RCLineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          label={{ value: 'Number of Samples', angle: -90, position: 'center', dx: -30 }}
        />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval="equidistantPreserveStart"
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dataKey={yAxisKey}
          type="linear"
          stroke="var(--color-chart-1)"
          strokeWidth={2}
          dot={false}
        />
      </RCLineChart>
    </ChartContainer>
  );
};
