import DiscountsAndCouponsTable from "../features/discounts-and-coupons/DiscountsAndCouponsTable";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import { InputsRow } from "../ui/InputsRow";
import { useFormContext } from "react-hook-form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import { Section } from "../ui/Container";

function DiscountsAndCoupons() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.discountsAndCoupons")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/discounts-and-coupons/discount-and-coupon-form"}
          addTitle={t("addButtons.addCoupon")}
          filterInputs={<FormInputs />}
        />
      </OperationsContainer>
      <Row>
        <DiscountsAndCouponsTable />
      </Row>
    </Section>
  );
}
export default DiscountsAndCoupons;

export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputsRow dir="column">
        <FormRow label={t("dataKeys.couponCode")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.category")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
        <FormRow label={t("dataKeys.expiryDate")}>
          <Input {...register("vendorName", { required: "هذا الحقل مطلوب" })} />
        </FormRow>
      </InputsRow>

      <InputsRow></InputsRow>
      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.active")}</Checkbox>
            <Checkbox>{t("dataKeys.expired")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
