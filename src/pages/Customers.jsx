import CustomersTable from "../features/customers/CustomersTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import { useForm, useFormContext } from "react-hook-form";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import Form from "../ui/Form";
import FilterButtons from "../ui/FilterButtons";
import useModal from "../hooks/useModal";
import { InputsRow } from "../ui/InputsRow";
import Checkbox from "../ui/Checkbox";

function Customers() {
  const { t } = useTranslation();
  return (
    // <Section title={t("routes.customers")}>
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations filterInputs={<FormInputs />} />
      </OperationsContainer>
      <Row>
        <CustomersTable />
      </Row>
    </>
  );
}
export default Customers;



export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputsRow dir="column">
        <FormRow label={t("dataKeys.name")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow> 
      </InputsRow>

     
    </>
  );
}