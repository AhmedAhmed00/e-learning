import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import useDetectMode from "../../hooks/useDetectMode";
import useValidate from "../../hooks/useValidate";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { InputsRow } from "../../ui/InputsRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { Section } from "../../ui/Container";
import FileInput from "../../ui/FileInput";
import DatePickerInput from "../../ui/DatePicker";
import { Textarea } from "../../ui/Textarea";
import { Label } from "recharts";
import RadioGroup from "../../ui/RadioGroup";
import PhoneInput from "react-phone-input-2";
import { FormActionsContainer } from "../courses/forms/LecturesToChapterForm";
import BreadCrumb from "../../ui/BreadCrumb";

function InstructorForm() {
  const { id, isEditingSession } = useDetectMode();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t, i18n: { language } = {} } = useTranslation();
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    defaultValues: state ? state : {},
  });

  const validate = useValidate(errors);

  const onSubmit = (data) => {
    console.log("Form data", data);
    // handle add/update logic
  };

  return (
    <Section
      title={state ? t("buttons.updateInstructor") : t("buttons.addInstructor")}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BreadCrumb />
        {/* Course Photo */}
        <InputsRow>
          <FormRow
            error={validate("instructorImage")}
            label={t("dataKeys.instructorImage")}
          >
            <FileInput control={control} name="instructorImage" />
          </FormRow>
        </InputsRow>

        {/* Basic Info */}
        <InputsRow>
          <FormRow error={validate("name")} label={t("dataKeys.name")}>
            <Input {...register("name")} />
          </FormRow>

          <FormRow
            error={validate("Specialization")}
            label={t("dataKeys.specialization")}
          >
            <Input type="number" {...register("Specialization")} />
          </FormRow>
        </InputsRow>

        {/* Category and Dates */}
        <InputsRow>
          <FormRow error={validate("phoneNumber")} label={t("dataKeys.phone")}>
            <PhoneInput country={"eg"} {...register("phoneNumber")} />
          </FormRow>

          <FormRow error={validate("email")} label={t("dataKeys.email")}>
            <DatePickerInput control={control} name="email" />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("password")} label={t("dataKeys.password")}>
            <Input country={"eg"} {...register("password")} />
          </FormRow>

          <FormRow
            error={validate("confirmPassword ")}
            label={t("dataKeys.confirmPassword")}
          >
            <Input name="confirmPassword " />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("nationalId")}
            label={t("dataKeys.nationalId")}
          >
            <FileInput control={control} name={"nationalId"} />
          </FormRow>

          <FormRow error={validate("cv")} label={t("dataKeys.cv")}>
            <FileInput control={control} name={"cv"} />
          </FormRow>
        </InputsRow>

        {/* Submit Button */}
        <FormActionsContainer>
          <Button isLoading={false} size="medium" variation="primary">
            {isEditingSession
              ? t("buttons.updateInstructor")
              : t("buttons.addInstructor")}
          </Button>
          <Button isLoading={false} size="medium" variation="cancel">
            {t("buttons.cancel")}
          </Button>
        </FormActionsContainer>
      </Form>
    </Section>
  );
}

export default InstructorForm;
