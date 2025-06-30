import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Row from "./Row";
import useDetectMode from "../hooks/useDetectMode";

export default function BreadCrumb({ manualCrumbs = null }) {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const currentPath = "/" + segments.join("/");

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { isEditingSession } = useDetectMode();

  const segmentTranslations = {
    home: t("routes.home") || "الرئيسية",
    courses: t("routes.courses") || "الدورات",
    instructors: t("routes.instructors") || "المدربين",
    add: t("actions.add") || "إضافة",
    edit: t("actions.edit") || "تعديل",
    orders: t("dataKeys.orders") || "الطلبات",
    users: t("dataKeys.users") || "المستخدمين",
    "course-form": !isEditingSession
      ? t("buttons.addCourse")
      : t("buttons.updateCourse"),
    "instructor-form": !isEditingSession
      ? t("buttons.addInstructor")
      : t("buttons.updateInstructor"),
  };

  const crumbs = segments.map((seg, i) => {
    const path = "/" + segments.slice(0, i + 1).join("/");
    return {
      label: segmentTranslations[seg] || seg,
      path,
    };
  });

  return (
    <BreadCrumbRow type="horizontal" justify="start">
      <BreadCrumbLink to="/" $active={pathname === "/"}>
        {t("routes.home") || "الرئيسية"}
      </BreadCrumbLink>

      {(manualCrumbs || crumbs).map((crumb) => (
        <React.Fragment key={crumb.path}>
          <BreadcrumbIcon>
            {language === "ar" ? (
              <FaLessThan size={10} />
            ) : (
              <FaGreaterThan size={10} />
            )}
          </BreadcrumbIcon>
          <BreadCrumbLink
            to={crumb.path}
            $active={
              manualCrumbs.length ? crumb.active : crumb.path === currentPath
            }
          >
            {crumb.label}
          </BreadCrumbLink>
        </React.Fragment>
      ))}
    </BreadCrumbRow>
  );
}

const BreadCrumbRow = styled(Row)`
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
`;

const BreadCrumbLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-grey-500)"};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};

  &:hover {
    text-decoration: underline;
    color: var(--color-primary);
  }
`;

const BreadcrumbIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 4px;
  color: var(--color-grey-400);
`;
