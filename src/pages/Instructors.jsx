import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import { useFormContext } from "react-hook-form";
import { InputsRow } from "../ui/InputsRow";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import InstructorsTable from "../features/instructors/InstructorsTable";

function Instructors() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.instructors")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/instructors/instructor-form"}
          addTitle={t("buttons.addInstructor")}
          // filterInputs={<FormInputs />}
          filterable={false}
        />
      </OperationsContainer>
      <Row>
        <InstructorsTable />
      </Row>
    </Section>
  );
}
export default Instructors;

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
