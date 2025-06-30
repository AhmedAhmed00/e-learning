import React from "react";
import { useTranslation } from "react-i18next";
import { Section } from "../../../ui/Container";
import Row from "../../../ui/Row";
import { Avatar } from "../../../ui/layout/Header";
import Heading from "../../../ui/Heading";
import Tag from "../../../ui/Tag";
import styled from "styled-components";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Instructor() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.instructors")}>
      <Row justify="start" gap="25px" type="horizontal">
        <Avatar src={"/profile.jpg"} />
        <Row type="vertical">
          <Row gap="6px">
            <Heading>Ahmed Hamdy</Heading>
            <Tag type="green">Active</Tag>
          </Row>
        </Row>
      </Row>
      <Row $margin="30px 0px" type="horizontal" justify="start" gap="25px">
        <InfoItem icon={<IoPersonOutline />} title={"Ahmed Hamdy"} />
        <InfoItem icon={<IoMailOutline />} title={"Ahmed@info.com"} />
        <InfoItem icon={<MdOutlinePhone />} title={"0123456789"} />
        <InfoItem
          icon={<MdOutlineLocationOn />}
          title={"Al Mehwar Al Markazi ,Giza,Egypt "}
        />
      </Row>

      <Row type="horizontal" justify="start" gap="8px">
        <Heading as={"h5"} color="primary">
          {t("dataKeys.specialization")}:
        </Heading>

        <p
          style={{
            color: "var(--color-grey-500)",
          }}
        >
          Development
        </p>
      </Row>

      <CourseContainer>
        <CourseDetail title={"Course 1"} />
        <CourseDetail title={"Course 2"} />
        <CourseDetail title={"Course 3"} />
        <CourseDetail title={"Course 4"} />
        <CourseDetail title={"Course 5"} />
        <CourseDetail title={"Course 6"} />
      </CourseContainer>
    </Section>
  );
}

const StyledIcon = styled.p`
  display: flex;
  font-size: 1.7rem;
`;

function InfoItem({ icon, title }) {
  return (
    <Row
      items="center"
      justify="center"
      width="fit-content"
      type="horizontal"
      gap="6px"
    >
      <StyledIcon>{icon}</StyledIcon>
      <p>{title}</p>
    </Row>
  );
}

const CourseContainer = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 6px;
  margin-top: 23px;
`;

export const btnWithIconStyles = {
  height: "42px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};
const StyledCourse = styled(Row)`
  padding: 14px 20px;
  border-radius: 6px;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-200);
  &:last-child {
    border-bottom: none;
  }
  & p {
    font-weight: 500;
    text-decoration: underline;
  }
`;

function CourseDetail({ title }) {
  return (
    <StyledCourse type="horizontal" $padding="10px 15px" $justify="between">
      <Link to={"lectures/1"}>
        <p>{title}</p>
      </Link>
      <FiDelete size={20} color="var(--color-red-700)" />
    </StyledCourse>
  );
}
