import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import CourseRow from "./CourseRow";
import { TABLE_HEADERS } from "../../data/gridKeys";
import { useTranslation } from "react-i18next";

function CoursesTable() {
  const { t } = useTranslation();

  const data = [
    {
      course: "React Fundamentals",
      instructor: "John Doe",
      price: "5000",
      totalStudents: "30",
      type: "Online",
      status: "active",
    },
    {
      course: "Advanced JavaScript",
      instructor: "Jane Smith",
      price: "5000",
      totalStudents: "30",
      type: "Online",
      status: "inActive",
    },
    {
      course: "CSS Mastery",
      instructor: "Ali Hassan",
      price: "5000",
      totalStudents: "30",
      type: "Online",
      status: "active",
    },
    {
      course: "Node.js Bootcamp",
      instructor: "Sara Mohamed",
      price: "5000",
      totalStudents: "30",
      type: "Online",
      status: "inActive",
    },
    {
      course: "Full Stack Development",
      instructor: "Ahmed Youssef",
      price: "5000",
      totalStudents: "30",
      type: "Online",
      status: "active",
    },
  ];

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
