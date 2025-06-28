import React from "react";
import { Section } from "../../../ui/Container";
import Tabs from "../../../ui/Tabs";
import { courseTabs } from "../../../data/appData";
import { Outlet } from "react-router-dom";

export default function CourseVeiw() {
  return (
    <Section title={"courses"}>
      <Tabs tabs={courseTabs} />
      <Outlet />
    </Section>
  );
}
