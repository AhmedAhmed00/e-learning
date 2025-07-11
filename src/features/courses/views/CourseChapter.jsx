import React from "react";
import { Section } from "../../../ui/Container";
import { useTranslation } from "react-i18next";
import TableOperations from "../../../ui/table/TableOperations";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import { FaEdit, FaPen, FaPencilRuler, FaPlus } from "react-icons/fa";
import { StyledCourseDetail } from "./CourseDetails";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";
import { useModalEl } from "../../../hooks/useModal";
import { Line } from "recharts";
import { Link, useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../../../ui/BreadCrumb";

export default function CourseChapter() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { courseId, chapterId } = useParams();
  return (
    <Section title={t("routes.courses")}>
      <BreadCrumb
        manualCrumbs={[
          {
            path: `/courses/${courseId}/course-details`,
            label: t("dataKeys.courseChapters"),
          },
          {
            active: true,
            label: t("dataKeys.chapter") + " " + chapterId,
          },
        ]}
      />

      <Row type="horizontal">
        <Heading as={"h2"}>Maching Learning Basics </Heading>
        <Row gap="20px" type="horizontal">
          <EditLecTrigger />
          <Button
            onClick={() =>
              navigate(
                `/courses/${courseId}/course-details/${chapterId}/lecture-form`
              )
            }
            style={btnWithIconStyles}
          >
            <i>
              <FaPlus />
            </i>

            {t("buttons.addNewLecture")}
          </Button>
        </Row>
      </Row>

      <Heading as={"h3"} margin="30px 0 20px 0px">
        {t("dataKeys.courseLectures")}
      </Heading>

      <LecturesContainer>
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
        <LectureDetail title={"Lecure 1"} />
      </LecturesContainer>
    </Section>
  );
}

function AddLecTrigger() {
  const { t } = useTranslation();

  const { openModal, handleClose, Modal } = useModalEl(
    <div>
      My Form Content
      <button onClick={() => handleClose()}>Close</button>
    </div>
  );

  return (
    <>
      <Button onClick={openModal} style={btnWithIconStyles}>
        <i>
          <FaPlus />
        </i>

        {t("buttons.addNewLecture")}
      </Button>
      {Modal}
    </>
  );
}
function EditLecTrigger() {
  const { t } = useTranslation();
  const { openModal, handleClose, Modal } = useModalEl(
    <div>
      <p>lesssa msh delwa2ti</p>
      <button onClick={() => handleClose()}>Close</button>
    </div>
  );

  return (
    <>
      <Button
        onClick={openModal}
        style={btnWithIconStyles}
        variation="secondary"
      >
        <i>
          <FaPencilRuler color="var(--color-primary)" />
        </i>
        {t("buttons.editChapter")}
      </Button>
      {Modal}
    </>
  );
}

const LecturesContainer = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 6px;
`;

export const btnWithIconStyles = {
  height: "42px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};
const StyledLecture = styled(Row)`
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

function LectureDetail({ title }) {
  return (
    <StyledLecture type="horizontal" $padding="10px 15px" $justify="between">
      <Link to={"lectures/1"}>
        <p>{title}</p>
      </Link>
      <FiDelete size={20} color="var(--color-red-700)" />
    </StyledLecture>
  );
}
