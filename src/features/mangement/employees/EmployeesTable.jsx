import GenericTable from "../../../ui/table/GenericTable";
import EmployeeRow from "./EmployeeRow";

const employees = [
  {
    name: "Mohamed Mahmoud",
    email: "mohamed_mahmoud@gmail.com",
    phone: "011111111023",
    role: "Back-End Developer",
    status: "active",
  },
  {
    name: "Maryam Ashraf",
    email: "maryam_ashraf@gmail.com",
    phone: "011111111023",
    role: "UI/UX Designer",
    status: "active",
  },
  {
    name: "Ahmed Hamdy",
    email: "ahmed_hamdy@gmail.com",
    phone: "011111111023",
    role: "Frontend Developer",
    status: "active",
  },
];

export const EMPLOYEES_HEADS = [
  "name",
  "email",
  "phone",
  "role",
  "status",
  "actions",
];

export const renderEmployeeRow = (employee, index) => (
  <EmployeeRow employee={employee} key={index} />
);

function EmployeesTable() {
  return (
    <>
      <GenericTable
        headers={EMPLOYEES_HEADS}
        data={employees}
        renderRow={renderEmployeeRow}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default EmployeesTable;
