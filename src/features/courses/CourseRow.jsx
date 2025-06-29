import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";

const statusColorMap = {
  active: "green",
  inActive: "red",
};
export default function CourseRow({ data }) {
  const { course, instructor, price, totalStudents, type, status } = data;
  const navigate = useNavigate();
  return (
    <TableRow cols={7} role="row">
      <TableCell>{course}</TableCell>
      <TableCell>{instructor}</TableCell>
      <TableCell style={{ marginInline: "10px" }}>{price}</TableCell>
      <TableCell style={{ marginInline: "40px" }}>{totalStudents}</TableCell>
      <TableCell style={{ marginInline: "10px" }}>{type}</TableCell>
      <TableCell>
        <Tag type={statusColorMap[data.status] || "blue"}>{data.status}</Tag>
      </TableCell>{" "}
      <TableCell>
        <Actions
          actions={["view", "delete", "update"]}
          onDelete={() => {}}
          onView={() => {
            navigate("1");
          }}
          onUpdate={() => {
            navigate("/courses/course-form?mode=update&id=1", { state: data });
          }}
        />
      </TableCell>
    </TableRow>
  );
}
