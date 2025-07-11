import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Section } from "../../../ui/Container";
import { useTranslation } from "react-i18next";
import Form from "../../../ui/Form";
import { InputsRow } from "../../../ui/InputsRow";
import FormRow from "../../../ui/FormRow";
import Input from "../../../ui/Input";
import RadioGroup from "../../../ui/RadioGroup";
import { useForm } from "react-hook-form";
import useValidate from "../../../hooks/useValidate";
import Button from "../../../ui/Button";
import useDetectMode from "../../../hooks/useDetectMode";

export default function CourseChapterForm() {
  const { t } = useTranslation();
  const { id: courseId } = useParams();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validate = useValidate();
  const { id, isEditingSession } = useDetectMode();
  const navigate = useNavigate();

  function onSubmit(values) {
    navigate("lectures-to-chapter", { state: values });
  }

  console.log(errors);
  return (
    <Section title={t("buttons.addNewChapter")}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow label={t("dataKeys.name")}>
            <Input />
          </FormRow>
          <FormRow label={t("dataKeys.price")}>
            <Input />
          </FormRow>
        </InputsRow>

        <div
          style={{
            paddingTop: "20px",
          }}
        >
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
        </div>

        <FormActionsContainer>
          <Button isLoading={false} size="medium" variation="secondary">
            {t("buttons.cancel")}
          </Button>
          <Button type="submit" isLoading={false} size="medium">
            {isEditingSession ? t("buttons.updateChpter") : t("buttons.next")}
          </Button>
        </FormActionsContainer>
      </Form>
    </Section>
  );
}

export function FormActionsContainer({ children, styleProps }) {
  return (
    <div
      style={{
        marginInlineStart: "auto",
        width: "fit-content",
        marginBottom: "20px",
        display: "flex",
        gap: "20px",
        ...styleProps,
      }}
    >
      {children}
    </div>
  );
}
