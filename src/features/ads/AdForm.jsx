import { useTranslation } from "react-i18next";
import { Section } from "../../ui/Container";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import useValidate from "../../hooks/useValidate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useDetectMode from "../../hooks/useDetectMode";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

function AdForm() {
  const { id, isEditingSession } = useDetectMode();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t, i18n: { language } = {} } = useTranslation();

  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
    control,
    reset,
    watch,
    setError,
  } = useForm({
    defaultValues: {
      subCategories: [{ subCategory: "" }],
    },
  });

  const validate = useValidate(errors);
  return (
    <>
      <Section title={t("addTitles.addNewAd")}>
        <Form>
          <InputsRow>
            <FormRow
              error={validate("location")}
              label={t("dataKeys.location")}
            >
              <Input {...register("location")} />
            </FormRow>
            <FormRow
              error={validate("duration")}
              label={t("dataKeys.duration")}
            >
              <Input {...register("duration")} />
            </FormRow>
          </InputsRow>
          <InputsRow>
            <FormRow error={validate("image")} label={t("dataKeys.image")}>
              <FileInput control={control} name="profilePic" />
            </FormRow>
          </InputsRow>
          <Button isLoading={false} size="medium" $variation="primary">
            {isEditingSession
              ? t("updateButtons.updateAd")
              : t("addButtons.addAd")}
          </Button>
        </Form>
      </Section>
    </>
  );
}

export default AdForm;
