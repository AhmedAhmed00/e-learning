import useModal from "../hooks/useModal";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";

import { useTranslation } from "react-i18next";
import CoursesTable from "../features/courses/CoursesTable";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import { InputsRow } from "../ui/InputsRow";
import { useFormContext } from "react-hook-form";
import Checkbox from "../ui/Checkbox";
import FilterCoursesModal from "../ui/modals/FilterCoursesModal";

// Styled Select with placeholder

function Courses() {
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    <>
      <Section title={t("routes.courses")}>
        <OperationsContainer>
          <SearchInput />

          <TableOperations
            filteringTrigger={<FilterCoursesModal />}
            addTitle={t("buttons.addCourse")}
            addPath={"/courses/course-form"}
            filterInputs={<FormInputs />}
          />
        </OperationsContainer>

        <Row>
          <CoursesTable />
        </Row>
      </Section>
    </>
  );
}

export default Courses;

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
          <Input
            {...register("vendorName", { required: t("validation.required") })}
          />
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
