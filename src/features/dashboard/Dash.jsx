import {
  MdAttachMoney,
  MdInventory2,
  MdShoppingCart,
  MdTrendingUp,
} from "react-icons/md";

import Row from "../../ui/Row";
import { useTranslation } from "react-i18next";
import { Section } from "../../ui/Container";
import AnalysisCard from "../../ui/analysis/AnalysisCard";
import BarChartSales from "./BarChart";
import PieChart from "./PieChart";
import PieChartContainer from "./PieChart";

// Moved above so it's defined before usage
export const iconStyles = (type = "primary") => ({
  style: {
    backgroundColor:
      type === "primary" ? "var(--color-primary)" : "var(--color-secondary)",
    borderRadius: "10px",
    padding: "8px",
    color: "#fff",
  },
});

export default function Dash() {
  const { t } = useTranslation();

  return (
    <Section title={t("routes.overview")}>
      <Row type="horizontal" $gap="10px">
        <AnalysisCard
          percentage={16}
          title={t("dashboard.activeCourses")}
          number="20"
          icon={<MdShoppingCart {...iconStyles()} size={46} />}
        />
        <AnalysisCard
          percentage={78}
          title={t("dashboard.newStudents")}
          number="20"
          icon={<MdAttachMoney {...iconStyles()} size={46} />}
        />

        <AnalysisCard
          percentage={7}
          title={t("dashboard.totalIncome")}
          number="20"
          icon={<MdInventory2 {...iconStyles()} size={46} />}
        />
        <AnalysisCard
          percentage={56}
          title={t("dashboard.todaySales")}
          number="20"
          icon={<MdTrendingUp {...iconStyles()} size={46} />}
        />
      </Row>
      <Row $gap="20px" type="horizontal" $margin="25px 0 0 0">
        <div
          style={{
            width: "70%",
          }}
        >
          <BarChartSales />
        </div>
        <div
          style={{
            width: "30%",
          }}
        >
          <PieChartContainer />
        </div>
      </Row>
    </Section>
  );
}
