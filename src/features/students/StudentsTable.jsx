import { TABLE_HEADERS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import StudentRow from "./StudentRow";

function StudentsTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.students}
        data={[]}
        renderRow={renderRow(StudentRow)}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default StudentsTable;
