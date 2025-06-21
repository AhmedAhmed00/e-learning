import { useTranslation } from "react-i18next";
import VendorTable from "../features/vendor/VendorTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import AnalysisCard from "../ui/analysis/AnalysisCard";
import { MdAttachMoney, MdCategory, MdGroup } from "react-icons/md";
import { iconStyles } from "../features/dashboard/Dash";
import { TableLayout } from "../ui/TableLayout";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { InputsRow } from "../ui/InputsRow";
import { useFormContext } from "react-hook-form";
import Checkbox from "../ui/Checkbox";

function Vendor() {
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
          <VendorTable />
        </Row>
      </TableLayout>
    </Section>
  );
}

export default Vendor;


export function FormInputs() {
  const { t } = useTranslation();
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
        <InputsRow>    
          <FormRow label={t("dataKeys.vendorName")}>
        <Input
          {...register("vendorName", { required: "هذا الحقل مطلوب" })}
        />
         </FormRow>
        </InputsRow>


      
      
        <InputsRow>
        <FormRow label={t("dataKeys.status")} >
          <Row type="horizontal" justify="start" $gap="10px">
     <Checkbox > 
            Complated
           </Checkbox>
     <Checkbox > 
            Pending
           </Checkbox>
     <Checkbox > 
            Banned
           </Checkbox>
          </Row>
      
        </FormRow>
  
        
        </InputsRow>
     
      {errors?.vendorName?.message && <p>{errors.vendorName.message}</p>}

 
    </>
  );
}
