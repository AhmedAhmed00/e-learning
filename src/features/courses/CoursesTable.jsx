import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import CourseRow from "./CourseRow";
import { TABLE_HEADERS } from "../../data/gridKeys";

function CoursesTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.courses}
        data={[]}
        renderRow={renderRow(CourseRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default CoursesTable;
