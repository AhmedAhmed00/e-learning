import React from "react";
import styled from "styled-components";
import Row from "../../../ui/Row";
import { FiDelete } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import { btnWithIconStyles } from "./CourseChapter";
import { FaPlus } from "react-icons/fa";

export default function CourseDetails() {
  const { t } = useTranslation();
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  return (
    <Row>
      <Row
        $margin="10px 0px"
        style={{ justifyContent: "space-between", alignItems: "center" }}
        type="horizonal"
      >
        <Heading>{t("dataKeys.chapters")}</Heading>
        <Button
          onClick={() => {
            navigate(`/courses/${courseId}/course-details/chapter-form`);
          }}
          style={btnWithIconStyles}
        >
          <i>
            <FaPlus />
          </i>
          {t("buttons.addNewChapter")}
        </Button>
      </Row>
      <Link to={"1"}>
        <CourseDetail title={`Chapter 1`} />
      </Link>
      <CourseDetail title={`Chapter 2`} />
      <CourseDetail title={`Chapter 3`} />
      <CourseDetail title={`Chapter 4`} />
      <CourseDetail title={`Chapter 5`} />
      <CourseDetail title={`Chapter 6`} />
      <CourseDetail title={`Chapter 7`} />
      <CourseDetail title={`Chapter 8 `} />
    </Row>
  );
}

function CourseDetail({ title }) {
  return (
    <StyledCourseDetail
      type="horizontal"
      $padding="10px 15px"
      $justify="between"
    >
      <p>{title}</p>
      <FiDelete size={20} color="var(--color-red-700)" />
    </StyledCourseDetail>
  );
}

export const StyledCourseDetail = styled(Row)`
  background-color: var(--color-grey-50);
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);
  & p {
    font-weight: 500;
    text-decoration: underline;
  }
`;
