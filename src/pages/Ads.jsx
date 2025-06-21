import { createPortal } from "react-dom";
import AdsTable from "../features/ads/AdsTable";
import useModal from "../hooks/useModal";
import { Container, Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";
import FormModal from "../ui/FormModal";
import AdForm from "../features/ads/AdForm";

import { FilterSelect } from "../ui/FilterSelect";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { InputsRow } from "../ui/InputsRow";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";

// Styled Select with placeholder

function Ads() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    <Section title={t("routes.ads")}>
      <OperationsContainer>
        <SearchInput />

        <TableOperations
          addPath={"/ads/ad-form"}
          addTitle={t("addButtons.addAd")}
          filterInputs={<FormInputs />}
        />
      </OperationsContainer>

      <Row>
        <AdsTable />
      </Row>
    </Section>
  );
}

export default Ads;

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
      <InputsRow>
        <FormRow label={t("dataKeys.type")}>
          <Row type="horizontal" justify="start" $gap="10px">
            <Checkbox>{t("dataKeys.active")}</Checkbox>
            <Checkbox>{t("dataKeys.expired")}</Checkbox>
          </Row>
        </FormRow>
      </InputsRow>
    </>
  );
}
