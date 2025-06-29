import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const ChartHead = styled(Heading)`
  padding: "20px 20px";
  color: var(--color-primary);
  padding: 0px 20px;
  font-size: 14px;
`;

export const StatsWrapper = styled(Row)`
  background-color: white;
  padding: 10px 0 0 10px;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  width: 100%;
  max-width: 100%;
`;

export default function BarChartSales() {
  const { t } = useTranslation();
  return (
    <StatsWrapper>
      <ChartHead as={"h3"}>{t("dataKeys.totalStudents")}</ChartHead>
      <ResponsiveContainer height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 20" />
          <XAxis
            direction={"ltr"}
            tick={{ fontSize: 14 }} // ← change font size here
            dataKey="name"
            axisLine={false} // لإزالة خط المحور الرأسي
            tickLine={false}
          />
          <YAxis
            axisLine={false} // لإزالة خط المحور الأفقي
            tickLine={false}
            direction={"ltr"}
            tick={{ fontSize: 14 }} // ← change font size here
          />
          <Tooltip />
          <Bar
            barSize={12}
            radius={8}
            dataKey="value"
            fill="var(--color-primary)"
          />
        </BarChart>
      </ResponsiveContainer>
    </StatsWrapper>
  );
}

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];
