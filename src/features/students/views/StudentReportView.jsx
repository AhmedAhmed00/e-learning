import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Section } from "../../../ui/Container";
import Row from "../../../ui/Row";
import AnalysisCard from "../../../ui/analysis/AnalysisCard";
import { CustomProgress } from "../../../ui/CustomProgress";
import Heading from "../../../ui/Heading";

export default function StudentReportView() {
  const { t } = useTranslation();

  return (
    <Section title={t("routes.student")}>
      <Row type="horizontal" gap="10px">
        <AnalysisCard
          title={t("dataKeys.totalChaptersAvailable")}
          icon={<Number>5</Number>}
        />
        <AnalysisCard
          title={t("dataKeys.totalComplatedChapters")}
          icon={<Number>5</Number>}
        />
        <AnalysisCard
          title={t("dataKeys.totalInComplatedChapters")}
          icon={<Number>5</Number>}
        />
      </Row>

      <Heading margin="24px 0px 5px 0px">{t("dataKeys.progress")}</Heading>
      <CustomProgress value={0.3} />

      <Row $margin="25px 0px" $direction="column" gap="10px">
        <CourseDetail title="Chapter 1" />
        <CourseDetail title="Chapter 2" />
        <CourseDetail title="Chapter 3" />
        <CourseDetail title="Chapter 4" />
        <CourseDetail title="Chapter 5" />
      </Row>
    </Section>
  );
}

function CourseDetail({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div>
      <StyledCourseDetail
        type="horizontal"
        $padding="10px 15px"
        $justify="between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{title}</p>
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </StyledCourseDetail>

      <AccordionWrapper style={{ height }}>
        <AccordionContent ref={contentRef}>
          <QuizRow type="horizontal">
            <p>Quiz 1:</p>
            <p>8/10</p>
          </QuizRow>
          <QuizRow type="horizontal">
            <p>Quiz 2:</p>
            <p>10/10</p>
          </QuizRow>
          <QuizRow type="horizontal">
            <p>Quiz 3:</p>
            <p>7/10</p>
          </QuizRow>
        </AccordionContent>
      </AccordionWrapper>
    </div>
  );
}

const QuizRow = styled(Row)`
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-grey-300);
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }

  & p {
    margin: 0;
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const StyledCourseDetail = styled(Row)`
  background-color: var(--color-grey-50);
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & p {
    font-weight: 500;
    text-decoration: underline;
  }
`;

const AccordionWrapper = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
`;

const AccordionContent = styled.div`
  background-color: var(--color-grey-100);

  border-radius: 8px;
  & p {
    margin: 4px 0;
    font-weight: 500;
  }
`;

const Number = styled.div`
  background-color: #00336126;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 2rem;
`;
