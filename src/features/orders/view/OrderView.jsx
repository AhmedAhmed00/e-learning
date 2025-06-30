import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Section } from "../../../ui/Container";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import styled from "styled-components";
import { Textarea } from "../../../ui/Textarea";
import FormRow from "../../../ui/FormRow";
import { FormActionsContainer } from "../../courses/forms/LecturesToChapterForm";
import Button from "../../../ui/Button";

export default function OrderView() {
  const { t } = useTranslation();
  const location = useLocation();
  const order = location?.state;

  // Optional: fallback UI if order is missing

  return (
    <Section title={t("routes.order")}>
      <Row gap="0" $margin="0px 0px">
        <Heading as="h3" margin="0px 0px 12px 0px" color="primary">
          {t("dataKeys.studentInfo")}
        </Heading>

        <Row justify="start" gap="15px" type="horizontal">
          <DataEntity title={t("dataKeys.name")} content={order.name} />

          <DataEntity
            title={t("dataKeys.phoneNumber")}
            content={order.phone || "-"}
          />

          <DataEntity
            title={t("dataKeys.email")}
            content={order.email || "-"}
          />
        </Row>
      </Row>

      <Row gap="0" $margin="20px 0px">
        <Heading as="h3" margin="12px 0px" color="primary">
          {t("dataKeys.courseInfo")}
        </Heading>
        <Row justify="start" gap="15px" type="horizontal">
          <DataEntity title={t("dataKeys.name")} content={order.course} />
          <DataEntity title={t("dataKeys.price")} content={order.price} />
        </Row>
      </Row>

      <Row gap="60px" $margin="40px 0px" type="horizontal">
        <ImgContainer>
          <Heading
            as={"h4"}
            style={{ textTransform: "capitalize", marginBottom: "10px" }}
            color="primary"
          >
            {t("dataKeys.image")}:
          </Heading>

          <img
            style={{ width: "100%", borderRadius: "15px" }}
            alt="product img"
            src="/lec.jpg"
          />
        </ImgContainer>

        <div style={{ flex: 1, alignSelf: "start" }}>
          <Heading
            as={"h4"}
            style={{ textTransform: "capitalize", marginBottom: "10px" }}
            color="primary"
          >
            {t("dataKeys.description")}:
          </Heading>
          <p style={{ width: "80%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt utc labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consecteturt adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore csd magna aliqua. incididunt ut
            labore et dolore magna aliqua.Lorem ipsumld dolor sit amet,
            consectetur adipiscing elit, sed do eius incididunt ut labo dolore
            magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed do eius incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dol sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </Row>
      <FormRow label={t("datakeys.notes")}>
        <Textarea placeholder="Write your comments here ..." />
      </FormRow>

      <div style={{ marginTop: "20px" }}>
        {order.status === "pending" && (
          <FormActionsContainer>
            <Button variation="success">{t("buttons.approve")}</Button>
            <Button variation="danger">{t("buttons.reject")}</Button>
          </FormActionsContainer>
        )}
      </div>
    </Section>
  );
}

function DataEntity({ title, content }) {
  return (
    <Row gap="3px">
      <Heading
        as={"h4"}
        style={{ textTransform: "capitalize" }}
        color="primary"
      >
        {title}:
      </Heading>
      <p>{content}</p>
    </Row>
  );
}

export const ImgContainer = styled.div`
  width: 25%;
`;
