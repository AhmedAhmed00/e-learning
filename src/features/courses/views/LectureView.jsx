import React, { useState } from "react";
import { Section } from "../../../ui/Container";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  FaEdit,
  FaFilePdf,
  FaPen,
  FaPlay,
  FaPlayCircle,
  FaPlus,
} from "react-icons/fa";
import { Switch, ToggleCircle } from "../../../ui/ToogleSwitch";
import { btnWithIconStyles } from "./CourseChapter";
import Button from "../../../ui/Button";
import { FormActionsContainer } from "../forms/LecturesToChapterForm";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../ui/BreadCrumb";

export default function LectureView() {
  const { t } = useTranslation();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const togglePermission = () => {
    setActive((state) => !state);
  };

  return (
    <Section title={t("routes.courses")}>
      <Row type="horizontal">
        <Heading as={"h3"}>{t("dataKeys.lectureTitle")}</Heading>
      </Row>

      <Row gap="60px" $margin="40px 0px" type="horizontal">
        <ImgContainer>
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            alt="lecture"
            src="/lec.jpg"
          />
          <PlayIcon>
            <FaPlay size={70} color="white" />
          </PlayIcon>
          <Row $margin="10px 0 0 0 " type="horizontal">
            <p>Can’t be opened till completing the previous lecture</p>
            <Switch isOn={isActive} onClick={togglePermission}>
              <ToggleCircle isOn={isActive} />
            </Switch>
          </Row>
        </ImgContainer>

        <div style={{ flex: 1, alignSelf: "start" }}>
          <Row $margin="0px 0px 60px 0px" gap="4px">
            <Heading
              style={{ textTransform: "capitalize", marginBottom: "10px" }}
              color="primary"
              as={"h4"}
            >
              {t("dataKeys.attachments ")}:
            </Heading>

            <Row type="horizontal" justify="start" gap="15px">
              <FaFilePdf size={70} color="var(--color-red-500)" />
              <FaFilePdf size={70} color="var(--color-red-500)" />
              <FaFilePdf size={70} color="var(--color-red-500)" />
            </Row>
          </Row>

          <Row gap="4px">
            <Heading
              style={{ textTransform: "capitalize" }}
              color="primary"
              as={"h4"}
              margin="0px 0px"
            >
              {t("dataKeys.quizLink")}:
            </Heading>
            <p>http://www.donware.com</p>
          </Row>
        </div>
      </Row>

      <FormActionsContainer>
        <Button variation="danger" onClick={() => {}} style={btnWithIconStyles}>
          <i>
            <BiTrash />
          </i>
          {t("buttons.deleteLecture")}
        </Button>
        <Button
          variation="secondary"
          onClick={() => {
            navigate(
              "/courses/1/course-details/chapter-form/lectures-to-chapter"
            );
          }}
          style={btnWithIconStyles}
        >
          <i>
            <FaPen />
          </i>
          {t("buttons.editLecture")}
        </Button>
      </FormActionsContainer>
    </Section>
  );
}

export const ImgContainer = styled.div`
  width: 50%;
  position: relative;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
