// import { useQuery } from "@tanstack/react-query";
// import { getStats } from "../../api/auth";
// import { PieChart, Pie, Cell } from "recharts";
// import Loader from "../../Shared/Loader";
// import useAuth from "../../Hooks/useAuth";


// const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];
const Statistics = () => {
  // const { loading } = useAuth();
  // const { data: stats = {} } = useQuery({
  //   enabled: !loading,
  //   queryKey: ["admin-stats"],
  //   queryFn: async () => await getStats(),
  // });
  // console.log(stats);

  // const chartArray = Object.keys(stats).map((key) => stats[key]);
  // console.log(chartArray);

  // // custom shape for pie chart
  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       x={x}
  //       y={y}
  //       fill="white"
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  // if (loading) {
  //   return <Loader></Loader>;
  // }

  return (
    <div>
      {/* <PieChart width={400} height={400}>
        <Pie
          data={chartArray}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartArray.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart> */}
    </div>
  );
};

export default Statistics;