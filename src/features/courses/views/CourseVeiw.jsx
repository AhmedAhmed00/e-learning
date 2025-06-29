import React from "react";
import { Section } from "../../../ui/Container";
import Tabs from "../../../ui/Tabs";
import { courseTabs } from "../../../data/appData";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CourseVeiw() {
  const { t } = useTranslation();
  return (
    <Section title={t("dataKeys.course")}>
      <Tabs tabs={courseTabs} />
      <Outlet />
    </Section>
  );
}
