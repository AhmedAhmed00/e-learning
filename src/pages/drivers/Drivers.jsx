
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { MdAttachMoney, MdCategory, MdGroup } from "react-icons/md";
import { Section } from "../../ui/Container";
import Row from "../../ui/Row";
import AnalysisCard from "../../ui/analysis/AnalysisCard";
import { iconStyles } from "../../features/dashboard/Dash";
import { TableLayout } from "../../ui/TableLayout";
import { OperationsContainer } from "../../ui/OperationsContainer";
import TableOperations from "../../ui/table/TableOperations";
import VendorTable from "../../features/vendor/VendorTable";
import { InputsRow } from "../../ui/InputsRow";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import FormRow from "../../ui/FormRow";
import DriversTable from "../../features/drivers/DriversTable";



function Drivers() {
  const { t } = useTranslation();
  return (
   <Section title={t("routes.vendor")}>
         <Row $margin="0px 0px 25px 0" type="horizontal" $gap="10px">
           <AnalysisCard
             percentage={78}
             title={t("dataKeys.totalVendors")}
             number="213"
             icon={<MdGroup {...iconStyles("secondary")} size={46} />}
           />
           <AnalysisCard
             percentage={16}
             title={t("dataKeys.totalProducts")}
             number="4232"
             icon={<MdCategory {...iconStyles("secondary")} size={46} />}
           />
           <AnalysisCard
             percentage={7}
             title={t("dataKeys.totalIncome")}
             number="300,00 EGP"
             icon={<MdAttachMoney {...iconStyles("secondary")} size={46} />}
           />
         </Row>
         <TableLayout>
           <OperationsContainer>
             <div></div>
             <TableOperations
               addTitle={t("addButtons.addVendor")}
               addPath={"/vendor/vendor-form"}
               filterInputs={<FormInputs />}
             />
           </OperationsContainer>
           <Row>
             <DriversTable />
           </Row>
         </TableLayout>
       </Section>
  );
}
export default Drivers;

export function FormInputs() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
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
            <Checkbox>{t("dataKeys.mainCategory")}</Checkbox>
            <Checkbox>{t("dataKeys.subCategory")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
