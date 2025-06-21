import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { TABLE_HEADERS } from "../../data/gridKeys";
import OrderRow from "./OrderRow";

function OrdersTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.orders}
        data={[]}
        renderRow={renderRow(OrderRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default OrdersTable;
