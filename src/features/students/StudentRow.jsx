import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import { Link, useNavigate } from "react-router-dom";

export default function StudentRow({ data: student }) {
  const navigate = useNavigate();
  const { id, name, date, phone, nubmerOfCourses, email } = student;
  return (
    <TableRow cols={6} role="row">
      <TableCell>
        <Link to={`/students/${id}`}>{name}</Link>
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{nubmerOfCourses}</TableCell>
      <TableCell>{email}</TableCell>

      <TableCell>
        <Actions
          actions={["view"]}
          onDelete={() => {}}
          onView={() => {
            navigate(`/students/${id}`);
          }}
          onUpdate={() => {}}
        />
      </TableCell>
    </TableRow>
  );
}
