import { TableRow } from "../../../../../Tyara Vendor/Tayara-vendor-front/src/ui/table/TableRow";
import { TableCell } from "../../../../../Tyara Vendor/Tayara-vendor-front/src/ui/table/TableCell";
import Actions from "../../../../../Tyara Vendor/Tayara-vendor-front/src/ui/Actions";
import { useNavigate } from "react-router-dom";

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
