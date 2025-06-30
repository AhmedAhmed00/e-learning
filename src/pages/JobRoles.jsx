import { OperationsContainer } from "../ui/OperationsContainer";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";
import Row from "../ui/Row";
import JobRolesTable from "../features/mangement/job-roles/JobRolesTable";
import { Section } from "../ui/Container";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { InputsRow } from "../ui/InputsRow";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";

function JobRoles() {
  return (
    <>
      <Section title={t("routes.jobRoles")}>
        <OperationsContainer>
          <SearchInput />
          <TableOperations
            filterable={false}
            addTitle={t("buttons.jobRole")}
            addPath={"/job-roles/job-roles-form"}
          />
        </OperationsContainer>

        <Row>
          <JobRolesTable />
        </Row>
      </Section>
    </>
  );
}
export default JobRoles;

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

      <InputsRow>
        <FormRow label={t("dataKeys.paymentType")}>
          <Row type="horizontal" justify="start" gap="10px">
            <Checkbox>{t("dataKeys.orders")}</Checkbox>
            <Checkbox>{t("dataKeys.commissions")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" gap="10px">
            <Checkbox>{t("dataKeys.approved")}</Checkbox>
            <Checkbox>{t("dataKeys.rejected")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
