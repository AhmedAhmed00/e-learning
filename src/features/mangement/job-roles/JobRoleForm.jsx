import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDetectMode from "../../../hooks/useDetectMode";
import { useForm } from "react-hook-form";
import { InputsRow } from "../../../ui/InputsRow";
import FormRow from "../../../ui/FormRow";
import Input from "../../../ui/Input";
import ToggleSwitch from "../../../ui/ToogleSwitch";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import Form from "../../../ui/Form";
import { Section } from "../../../ui/Container";
import { Textarea } from "../../../ui/Textarea";
import { FormActionsContainer } from "../../courses/forms/CourseChapterForm";

const permissions = [
  { id: 1, name: "View Users", key: "user.view" },
  { id: 2, name: "Create Users", key: "user.create" },
  { id: 3, name: "Edit Users", key: "user.edit" },
  { id: 4, name: "Delete Users", key: "user.delete" },
  { id: 5, name: "View Roles", key: "role.view" },
  { id: 6, name: "Create Roles", key: "role.create" },
  { id: 7, name: "Edit Roles", key: "role.edit" },
  { id: 8, name: "Delete Roles", key: "role.delete" },
  { id: 9, name: "Access Dashboard", key: "dashboard.access" },
  { id: 10, name: "Generate Reports", key: "report.generate" },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 30px;
`;

function JobRolesForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id, isEditingSession } = useDetectMode();

  const {
    handleSubmit,

    register,

    setError,

    control,
    reset,
  } = useForm({
    defaultValues: {
      name: [],
      permissions: [],
    },
  });

  function onSubmit(values) {
    // const filteredObj = Object.entries(filterObject(values))
    //   .filter(([key]) => key !== "name")
    //   .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    // console.log("filterObject", filteredObj);
    // const arrOfPermissions = filteredObj.permissions;
    // const body = {
    //   name: values.name,
    //   permissions: arrOfPermissions,
    // };
    // isEditingSession
    //   ? updateExistingJob(
    //       { id, body },
    //       {
    //         onSuccess: () => navigate(-1),
    //         onError: (error) => setServerErrors(error, setError),
    //       }
    //     )
    //   : addNewJob(body, {
    //       onSuccess: () => navigate(-1),
    //       onError: (error) => setServerErrors(error, setError),
    //     });
  }

  return (
    <Section title={t("routes.roles")}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow label={t("dataKeys.role")}>
            <Input
              {...register("role", {
                required: { message: "Name Is Required" },
              })}
            />
          </FormRow>
          <FormRow></FormRow>
        </InputsRow>
        <FormRow label={t("dataKeys.description")}>
          <Textarea />
        </FormRow>

        <Container>
          {permissions?.map(
            (permission) =>
              permission !== null && (
                <ToggleSwitch
                  key={permission?.id} // ✅ Add key to prevent re-renders
                  control={control}
                  name="permissions"
                  permission={permission}
                />
              )
          )}
        </Container>
      </Form>
      <div style={{ marginTop: "20px" }}>
        <FormActionsContainer type="horizontal" justify="end" gap="15px">
          <Button isLoading={false} size="medium" variation="primary">
            {isEditingSession ? t("buttons.updateJob") : t("buttons.addJob")}
          </Button>
        </FormActionsContainer>
      </div>
    </Section>
  );
}

export default JobRolesForm;
