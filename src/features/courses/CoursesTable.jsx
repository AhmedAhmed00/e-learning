import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import CourseRow from "./CourseRow";
import { TABLE_HEADERS } from "../../data/gridKeys";

const data = [
  {
    course: "مادة علم الاجتماع",
    instructor: "محمد حمدي",
    price: "5000",
    totalStudents: "30",
    type: "علوم اجتماعية",
    status: "active",
  },
  {
    course: "مادة علم الاجتماع",
    instructor: "محمد حمدي",
    price: "5000",
    totalStudents: "30",
    type: "علوم اجتماعية",
    status: "active",
  },
  {
    course: "مادة علم الاجتماع",
    instructor: "محمد حمدي",
    price: "5000",
    totalStudents: "30",
    type: "علوم اجتماعية",
    status: "active",
  },
  {
    course: "مادة علم الاجتماع",
    instructor: "محمد حمدي",
    price: "5000",
    totalStudents: "30",
    type: "علوم اجتماعية",
    status: "active",
  },
  {
    course: "مادة علم الاجتماع",
    instructor: "محمد حمدي",
    price: "5000",
    totalStudents: "30",
    type: "علوم اجتماعية",
    status: "active",
  },
];

function CoursesTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.courses}
        data={data}
        renderRow={renderRow(CourseRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default CoursesTable;
