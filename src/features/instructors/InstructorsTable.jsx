import { TABLE_HEADERS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import InstructorRow from "./InstructorRow";

function InstructorsTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.instructors}
        data={[]}
        renderRow={renderRow(InstructorRow)}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default InstructorsTable;
