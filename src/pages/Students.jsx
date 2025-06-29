import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import GroupsTable from "../features/students/StudentsTable";

function Students() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.students")}>
      <>
        <OperationsContainer>
          <SearchInput />
          <TableOperations filterable={false} />
        </OperationsContainer>
        <Row>
          <GroupsTable />
        </Row>
      </>
    </Section>
  );
}
export default Students;
