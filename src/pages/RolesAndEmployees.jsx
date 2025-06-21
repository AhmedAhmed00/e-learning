import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import Tabs from "../ui/Tabs";
import { rolesAndEmployeesTabs } from "../data/appData";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function RolesAndEmployees() {
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    <Section title={t("routes.employeesAndRoles")}>
      <Tabs tabs={rolesAndEmployeesTabs} />

      <Row>
        <Outlet />
      </Row>
    </Section>
  );
}
export default RolesAndEmployees;
