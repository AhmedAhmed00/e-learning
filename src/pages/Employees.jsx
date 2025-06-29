import { useTranslation } from "react-i18next";
import { OperationsContainer } from "../ui/OperationsContainer";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";
import Row from "../ui/Row";

import { Section } from "../ui/Container";
import { useFormContext } from "react-hook-form";
import { InputsRow } from "../ui/InputsRow";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import EmployeesTable from "../features/mangement/employees/EmployeesTable";

function Employees() {
  const { t } = useTranslation();
  return (
    <>
      <Section title={t("routes.employees")}>
        <OperationsContainer>
          <SearchInput />
          <TableOperations
            addTitle={t("buttons.employee")}
            addPath={"/employees/employee-form"}
            filterInputs={<FormInputs />}
          />
        </OperationsContainer>

        <Row>
          <EmployeesTable />
        </Row>
      </Section>
    </>
  );
}
export default Employees;

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
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>

      <InputsRow>
        <FormRow label={t("dataKeys.start date")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
        <FormRow label={t("dataKeys.end date")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>

      <InputsRow>
        <FormRow label={t("dataKeys.paymentType")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.orders")}</Checkbox>
            <Checkbox>{t("dataKeys.commissions")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.approved")}</Checkbox>
            <Checkbox>{t("dataKeys.rejected")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
