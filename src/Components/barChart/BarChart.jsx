import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AppRatings({ app }) {
  

  return (
    <div className="mt-10 bg-gray-50 p-5 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Ratings
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
         data={[...app.ratings].reverse()}

          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis type="number" tick={{ fill: "#555" }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#555" }}
            width={80}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,165,0,0.1)" }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
          />
          <Bar
            dataKey="count"
            fill="#FF9500"
            barSize={25}
            radius={[0, 5, 5, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
