import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

export default function CategoryRow({ data }) {
  const { id, name, image, products, type } = data || {};

  return (
    <TableRow cols={5} role="row">
      <TableCell>{name}</TableCell>
      <TableCell style={{ paddingInline: "35px" }}>{products}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
