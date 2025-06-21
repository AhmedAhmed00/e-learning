
import { DRIVERS_HEADS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import DriverRow from "./DriverRow";

function DriversTable() {
  return (
    <>
      <GenericTable
        headers={DRIVERS_HEADS}
        data={[]}
        renderRow={renderRow(DriverRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default DriversTable;
