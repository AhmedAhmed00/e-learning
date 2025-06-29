import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function JobRoleRow({ jobRole }) {
  const navigate = useNavigate();

  if (!jobRole) return null; //LAAAAAAAAAATER
  const { role, numberOfEmployees } = jobRole || {};
  console.log(jobRole);

  console.log(jobRole);

  return (
    <TableRow cols={3} role="row">
      <TableCell>{role}</TableCell>
      <TableCell>{numberOfEmployees}</TableCell>

      <Actions
        onDelete={() => {}}
        onView={() => {}}
        onUpdate={() => {
          navigate(`/job-roles/job-roles-form?mode=update&id=${jobRole.id}`);
        }}
      />
    </TableRow>
  );
}

export default JobRoleRow;
