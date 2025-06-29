import { Section } from "../ui/Container";
import Row from "../ui/Row";
import CategoriesTable from "../features/categories/CategoriesTable";
import { useTranslation } from "react-i18next";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import Checkbox from "../ui/Checkbox";
import FormRow from "../ui/FormRow";
import { InputsRow } from "../ui/InputsRow";
import Input from "../ui/Input";
import { useFormContext } from "react-hook-form";
import { useFetch } from "../hooks/useFetch";
import { categoriesServices } from "../data/api";

function Categories() {
  const { t } = useTranslation();

  return (
    <Section title={t("routes.categories")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/categories/category-form"}
          addTitle={t("buttons.addCategory")}
          filterInputs={<FormInputs />}
        />
      </OperationsContainer>

      <Row>
        <CategoriesTable />
      </Row>
    </Section>
  );
}
export default Categories;

export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  return (
    <>
      <InputsRow>
        <FormRow label={t("dataKeys.category")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>

      <InputsRow></InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.type")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox checked={getValues("type") === "category"}>
              {t("dataKeys.mainCategory")}
            </Checkbox>
            <Checkbox checked={getValues("type") === "subcategory"}>
              {t("dataKeys.subCategory")}
            </Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
