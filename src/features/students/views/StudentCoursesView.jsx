import { useTranslation } from "react-i18next";
import { Section } from "../../../ui/Container";
import Row from "../../../ui/Row";
import { Avatar } from "../../../ui/layout/Header";
import Heading from "../../../ui/Heading";
import Tag from "../../../ui/Tag";
import styled from "styled-components";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CustomProgress } from "../../../ui/CustomProgress";

import DisableCourseModal from "../../../ui/modals/DisableCourseModal";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function StudentCoursesView() {
  const { t, i18n: { language } = {} } = useTranslation();
  return (
    <Section title={t("routes.students")}>
      <StudentWrapper>
        <Row gap=" 0px" type="horizontal">
          {/* image row */}
          <Row items="center" justify="start" gap="25px" type="horizontal">
            <Avatar src={"/profile.jpg"} />
            <Row justify="center" type="vertical">
              <Row $justify="center" padding="0px" $margin="0px" gap="6px">
                <Heading>Ahmed Hamdy</Heading>
                <Tag type="green">Active</Tag>
              </Row>
            </Row>
          </Row>
          {/* image row */}

          <Row $margin="30px 0px" type="horizontal" justify="end" gap="25px">
            <InfoItem icon={<IoPersonOutline />} title={"Ahmed Hamdy"} />
            <InfoItem icon={<IoMailOutline />} title={"Ahmed@info.com"} />
            <InfoItem icon={<MdOutlinePhone />} title={"0123456789"} />
          </Row>
        </Row>

        <Row
          $margin="20px 10px 20px 0px"
          type="horizontal"
          justify="start"
          gap="8px"
        >
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
          <CourseDetail
            title="PHP Laravel"
            color="var(--color-grey-600)"
            valuePer={0.3}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="Ruby on Rails"
            color="var(--color-red-800)"
            valuePer={0.5}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="Ruby 3l 3agla"
            color="var(--color-yellow-700)"
            valuePer={0.2}
            bg="var(--color-grey-200)"
          />

          <CourseDetail
            title="Svelte Kit"
            color="var(--color-green-600)"
            valuePer={0.6}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="Angular"
            color="var(--color-red-800)"
            valuePer={0.7}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="Go Lang"
            color="var(--color-brand-800)"
            valuePer={0.4}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="ASP Dotnet Core"
            color="var(--color-red-700)"
            valuePer={0.8}
            bg="var(--color-grey-200)"
          />
          <CourseDetail
            title="Spring Boot"
            color="var(--color-green-700)"
            valuePer={0.9}
            bg="var(--color-grey-200)"
          />
        </CourseContainer>

        <Link to={`/students/1/report `}>
          <Row $margin="20px 0px" type="horizontal" gap="10px" justify="end">
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              {t("common.viewReports")}
            </p>
            {language === "en" ? (
              <FaLongArrowAltRight />
            ) : (
              <FaLongArrowAltLeft />
            )}
          </Row>
        </Link>
      </StudentWrapper>
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

function CourseDetail({ title, valuePer, color, bg }) {
  return (
    <StyledCourse type="horizontal" $padding="10px 15px" $justify="between">
      <Link to={"/courses/1"}>
        <p>{title}</p>
      </Link>
      <Row type="horizontal" width="44%">
        <div style={{ width: "88%" }}>
          <CustomProgress value={valuePer} max={1} color={color} bg={bg} />
        </div>

        <DisableCourseModal />
      </Row>
    </StyledCourse>
  );
}

const CourseContainer = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 6px;
  margin-top: 23px;
`;

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

const StudentWrapper = styled.div`
  background-color: white;
  height: auto;
  padding: 30px 30px 200px 30px;
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);
`;
