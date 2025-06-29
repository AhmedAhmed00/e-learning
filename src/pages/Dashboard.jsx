import AnalysisCard from "../ui/analysis/AnalysisCard";
import Row from "../ui/Row";
import TasksCahrt from "../features/dashboard/TasksChart";
import CasesChart from "../features/dashboard/CasesChart";
import { Container } from "../ui/Container";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  
  const STATIC_DATA = [
    {
      title: t("dashboard.openCases"),
      number: 263,
    },
    {
      title: t("dashboard.closedCases"),
      number: 56,
    },
    {
      title: t("dashboard.upcomingSessions"),
      number: 97,
    },
    {
      title: t("dashboard.pendingTasks"),
      number: 20,
    },
    {
      title: t("dashboard.dueInvoices"),
      number: 56,
    },
    {
      title: t("dashboard.monthlyRevenue"),
      number: 4,
    },
  ];

  return (
    <Container>
      <Row gap="10px" type="horizontal">
        {STATIC_DATA.map(({ title, number }, i) => (
          <AnalysisCard key={i} title={title} number={number} />
        ))}
      </Row>
      <Row margin={"0px 0px"} gap="25px" type="horizontal"></Row>
    </Container>
  );
}

export default Dashboard;
