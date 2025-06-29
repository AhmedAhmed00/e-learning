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
import FileInput from "../../../ui/FileInput";
import FilesInput from "../../../ui/FilesInput";

export default function LecturesToChapterForm() {
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
    console.log(values);
  }

  return (
    <Section title={t("routes.addNewLecture")}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow label={t("dataKeys.lectureName")}>
            <Input />
          </FormRow>
          <FormRow label={t("dataKeys.lectureTime")}>
            <Input />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow label={t("dataKeys.videoUrl")}>
            <Input />
          </FormRow>
          <FormRow label={t("dataKeys.quizUrl")}>
            <Input />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow label={t("dataKeys.attachments")}>
            <FilesInput
              documentType="pdf"
              control={control}
              name={"attachments"}
            />
          </FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <FormActionsContainer>
          <Button isLoading={false} size="medium" variation="secondary">
            {t("addButtons.cancel")}
          </Button>
          <Button type="submit" isLoading={false} size="medium">
            {isEditingSession ? t("buttons.updateChpter") : t("buttons.next")}
          </Button>
        </FormActionsContainer>
      </Form>
    </Section>
  );
}

export function FormActionsContainer({ children }) {
  return (
    <div
      style={{
        marginInlineStart: "auto",
        width: "fit-content",
        marginBottom: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
}
