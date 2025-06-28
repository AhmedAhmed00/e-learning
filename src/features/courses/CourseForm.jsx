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

function CourseForm() {
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
      title={
        state ? t("updateButtons.updateCourse") : t("addButtons.addCourse")
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Course Photo */}
        <InputsRow>
          <FormRow
            error={validate("coursePhoto")}
            label={t("dataKeys.coursePhoto")}
          >
            <FileInput control={control} name="coursePhoto" />
          </FormRow>
        </InputsRow>

        {/* Basic Info */}
        <InputsRow>
          <FormRow
            error={validate("courseName")}
            label={t("dataKeys.courseName")}
          >
            <Input {...register("courseName")} />
          </FormRow>
          <FormRow
            error={validate("instructor")}
            label={t("dataKeys.instructor")}
          >
            <Input {...register("instructor")} />
          </FormRow>
          <FormRow error={validate("price")} label={t("dataKeys.price")}>
            <Input type="number" {...register("price")} />
          </FormRow>
        </InputsRow>

        {/* Category and Dates */}
        <InputsRow>
          <FormRow error={validate("category")} label={t("dataKeys.category")}>
            <Input {...register("category")} />
          </FormRow>
          <FormRow
            error={validate("start_date")}
            label={t("dataKeys.startDate")}
          >
            <DatePickerInput control={control} name="start_date" />
          </FormRow>
          <FormRow error={validate("end_date")} label={t("dataKeys.endDate")}>
            <DatePickerInput control={control} name="end_date" />
          </FormRow>
        </InputsRow>

        {/* Type (Free or Paid) */}
        <InputsRow>
          <FormRow label={t("dataKeys.type")} error={validate("type")}>
            <RadioGroup
              name="type"
              options={[
                { value: "free", label: t("dataKeys.free") || "Free" },
                { value: "paid", label: t("dataKeys.paid") || "Paid" },
              ]}
              register={register}
              control={control}
            />
          </FormRow>
          <FormRow label={t("dataKeys.status")} error={validate("status")}>
            <RadioGroup
              name="status"
              options={[
                { value: "free", label: t("dataKeys.active") },
                { value: "paid", label: t("dataKeys.inActive") },
              ]}
              register={register}
              control={control}
            />
          </FormRow>
        </InputsRow>

        {/* Description */}
        <InputsRow>
          <FormRow label={t("dataKeys.description")}>
            <Textarea {...register("description")} />
          </FormRow>
        </InputsRow>

        {/* Submit Button */}
        <Button isLoading={false} size="medium" $variation="primary">
          {isEditingSession
            ? t("updateButtons.updateDoctor")
            : t("addButtons.addCategory")}
        </Button>
      </Form>
    </Section>
  );
}

export default CourseForm;
