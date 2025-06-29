import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import Tag from "../../../ui/Tag";

function EmployeeRow({ employee }) {
  const navigate = useNavigate();
  if (!employee) return null; //LAAAAAAAAAATER
  const { name, email, phone, role, status } = employee || {};
  console.log(employee);

  return (
    <TableRow cols={6} role="row">
      <TableCell>{name || name || "N/A"}</TableCell>
      <TableCell>{email || "N/A"}</TableCell>
      <TableCell>{phone || "N/A"}</TableCell>
      <TableCell>{role || "N/A"}</TableCell>
      <TableCell>
        <Tag type={status === "active" ? "green" : "red"}>{status}</Tag>
      </TableCell>

      <Actions
        onDelete={() => {}}
        onView={() => {}}
        onUpdate={() => {
          navigate(`/employees/employee-form?mode=update&id=${employee.id}`);
        }}
      />
    </TableRow>
  );
}

export default EmployeeRow;
