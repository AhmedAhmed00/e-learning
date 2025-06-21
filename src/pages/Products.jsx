import { useTranslation } from "react-i18next";
import ProductsTable from "../features/products/ProductsTable";
import { Container, Section } from "../ui/Container";
import Row from "../ui/Row";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import { InputsRow } from "../ui/InputsRow";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useFormContext } from "react-hook-form";
import Checkbox from "../ui/Checkbox";

function Products() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.products")}>
      <>
        <OperationsContainer>
          <SearchInput />
          <TableOperations
            addTitle={t("addButtons.addProduct")}
            addPath={"/products/product-form"}
            filterInputs={<FormInputs />}
          />
        </OperationsContainer>
        <Row>
          <ProductsTable />
        </Row>
      </>
    </Section>
  );
}

export default Products;

export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputsRow dir="column">
        <FormRow label={t("dataKeys.product")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
        <FormRow label={t("dataKeys.category")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>

      <InputsRow></InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.approved")}</Checkbox>
            <Checkbox>{t("dataKeys.pending")}</Checkbox>
            <Checkbox>{t("dataKeys.rejected")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
