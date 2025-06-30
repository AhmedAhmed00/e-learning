import OrdersTable from "../features/orders/OrdersTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";
import Checkbox from "../ui/Checkbox";
import FormRow from "../ui/FormRow";
import { InputsRow } from "../ui/InputsRow";
import Input from "../ui/Input";
import { useFormContext } from "react-hook-form";
import FilterOrders from "../ui/modals/FilterOrders";

function Orders() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.orders")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations filteringTrigger={<FilterOrders />} />
      </OperationsContainer>
      <Row>
        <OrdersTable />
      </Row>
    </Section>
  );
}
export default Orders;
