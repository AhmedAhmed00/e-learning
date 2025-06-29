import React from "react";
import GenericTable from "../../../ui/table/GenericTable"; // adjust the path if needed
import JobRoleRow from "./JobRoleRow";

export const JOB_ROLES_HEADS = ["name", "numberOfEmployees", "Actions"];

const JobRoles = [
  {
    role: "Software Engineer",
    numberOfEmployees: 12,
    desc: "Responsible for developing and maintaining software applications.",
  },
  {
    role: "Product Manager",
    numberOfEmployees: 4,
    desc: "Oversees product planning and delivery across teams.",
  },
  {
    role: "UI/UX Designer",
    numberOfEmployees: 3,
    desc: "Designs user interfaces and improves user experiences.",
  },
  {
    role: "QA Engineer",
    numberOfEmployees: 5,
    desc: "Ensures product quality through manual and automated testing.",
  },
  {
    role: "DevOps Engineer",
    numberOfEmployees: 2,
    desc: "Manages CI/CD pipelines and infrastructure automation.",
  },
];

export const renderJobRow = (jobRole, index) => (
  <JobRoleRow jobRole={jobRole} key={index} />
);

function JobRolesTable() {
  return (
    <GenericTable
      headers={JOB_ROLES_HEADS}
      data={JobRoles}
      renderRow={renderJobRow}
      pageSize={20}
      resaultsCount={JobRoles.length}
      isLoading={false}
    />
  );
}

export default JobRolesTable;
