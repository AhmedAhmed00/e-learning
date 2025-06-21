import { useEffect } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { StyledPhoneInput } from "../../ui/PhoneNumbers";
import Logo from "../../ui/Logo";
import styled from "styled-components";
import { t } from "i18next";
import { loginschema } from "../../schema";
import Heading from "../../ui/Heading";
import { AuthLayout } from "../../pages/Login";

const LogoContainer = styled.div`
  width: 300px;
  height: 250px;
  justify-contnet: center;
  margin: auto;
`;

function ForgetPassword() {
  const navigate = useNavigate();

  const { isLoading, login, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginschema),
  });

  async function onSubmit(data) {
    await login(data);
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Heading color="primary">{t("common.forgetPassword")}</Heading>
        <p
          style={{
            fontSize: "1.6rem",
            color: "var(--color-grey-500)",
            paddingBlock: "1.4rem 2rem",
          }}
        >
          {t("common.enterPhoneMsg")}
        </p>

        <FormRow label={t("dataKeys.phone")}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <StyledPhoneInput country="iq" {...field} />}
          />
        </FormRow>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <FormRow>
          <Button
            isLoading={isLoading}
            style={{ marginTop: "25px" }}
            size="large"
          >
            {t("common.sendCode")}
          </Button>
        </FormRow>
      </Form>
    </AuthLayout>
  );
}

export default ForgetPassword;
