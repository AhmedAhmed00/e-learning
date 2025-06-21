import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Styled Components

const StatsWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CenterLabel = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-grey-700);
  pointer-events: none;
`;

const LegendRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-grey-700);
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
];

export default function PieChartContainer() {
  const { t } = useTranslation();

  return (
    <StatsWrapper>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={110}
            label
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <CenterLabel>{t("dataKeys.students")}</CenterLabel>

      <LegendRow>
        <LegendItem>
          <Circle color={COLORS[0]} />
          <p>Active Requests 70%</p>
        </LegendItem>
        <LegendItem>
          <Circle color={COLORS[1]} />
          <p>Pending Requests 19%</p>
        </LegendItem>
        <LegendItem>
          <Circle color={COLORS[2]} />
          <p>Rejected Requests 5%</p>
        </LegendItem>
      </LegendRow>
    </StatsWrapper>
  );
}
