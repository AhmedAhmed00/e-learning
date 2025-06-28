import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import { useNavigate } from "react-router-dom";

export default function CourseRow({ data }) {
  const { course, instructor, price, totalStudents, type, status } = data;
  const navigate = useNavigate();
  return (
    <TableRow cols={7} role="row">
      <TableCell>{course}</TableCell>
      <TableCell>{instructor}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{totalStudents}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <Actions
          actions={["view", "delete", "update"]}
          onDelete={() => {}}
          onView={() => {
            navigate("1");
          }}
          onUpdate={() => {}}
        />
      </TableCell>
    </TableRow>
  );
}
