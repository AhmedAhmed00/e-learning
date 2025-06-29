import { useNavigate } from "react-router-dom";
import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import Tag from "../../ui/Tag";

const statusColorMap = {
  completed: "green",
  pending: "yellow",
  cancelled: "red",
  refunded: "gray",
};

function OrderRow({ data }) {
  const navigate = useNavigate();
  return (
    <TableRow cols={7} role="row">
      <TableCell style={{ marginInline: "25px" }}>{data.orderNumber}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.course}</TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell>{data.total}</TableCell>
      <TableCell style={{ marginInline: "-30px" }}>
        <Tag type={statusColorMap[data.status] || "blue"}>{data.status}</Tag>
      </TableCell>
      <Actions
        actions={["view"]}
        onView={() => {
          navigate(`/orders/${data.orderNumber}`, { state: data });
        }}
      />
    </TableRow>
  );
}

export default OrderRow;
