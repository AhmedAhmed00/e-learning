import React from "react";
import { useParams } from "react-router-dom";
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
  const { register, control } = useForm();
  const validate = useValidate();
  const { id, isEditingSession } = useDetectMode();

  return (
    <Section title={t("dataKeys.addNewChapter")}>
      <Form>
        <InputsRow>
          <FormRow label={t("dataKeys.chapterName")}>
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
            {t("addButtons.cancel")}
          </Button>
          <Button isLoading={false} size="medium">
            {isEditingSession
              ? t("updateButtons.updateChpter")
              : t("addButtons.next")}
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
