import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    month: 'JAN',
    uv: 1000,
    amt: 2400,
  },
  {
    month: 'FEB',
    uv: 2000,
    amt: 2210,
  },
  {
    month: 'MAR',
    uv: 1600,
    amt: 2290,
  },
  {
    month: 'APR',
    uv: 1500,
    amt: 2000,
  },
  {
    month: 'MAY',
    uv: 1890,
    amt: 2181,
  },
  {
    month: 'JUN',
    uv: 2390,
    amt: 2500,
  },
  {
    month: 'JUL',
    uv: 1100,
    amt: 2100,
  },
  {
    month: 'AUG',
    uv: 500,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fa4a84" stopOpacity={0.4} />
            <stop offset="25%" stopColor="#fa4a84" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#fa4a84" stopOpacity={0.09} />
            <stop offset="80%" stopColor="#fa4a84" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#fa4a84"
          fill="url(#color)"
          dot={{ stroke: 'red', strokeWidth: 1 }}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis dataKey="amt" axisLine={false} tickLine={false} />
        <Tooltip cursor={{ stroke: '#fa4a84', strokeWidth: 1 }} />
        <CartesianGrid opacity={0.5} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
