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

function Orders() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.orders")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations filterInputs={<FormInputs />} />
      </OperationsContainer>
      <Row>
        <OrdersTable />
      </Row>
    </Section>
  );
}
export default Orders;

export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputsRow dir="column">
        <FormRow label={t("dataKeys.orderNumber")}>
          <Input
            {...register("vendorName", { required: t("validation.required") })}
          />
        </FormRow>
      </InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.start date")}>
          <Input
            {...register("vendorName", { required: t("validation.required") })}
          />
        </FormRow>
        <FormRow label={t("dataKeys.end date")}>
          <Input
            {...register("vendorName", { required: t("validation.required") })}
          />
        </FormRow>
      </InputsRow>

      <InputsRow></InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.active")}</Checkbox>
            <Checkbox>{t("dataKeys.inProgress")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
