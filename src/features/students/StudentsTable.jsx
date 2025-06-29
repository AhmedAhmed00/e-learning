import { TABLE_HEADERS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import StudentRow from "./StudentRow";
const students = [
  {
    id: 1,
    name: "Ahmdy Hamdy",
    date: "1/1/2002",
    phone: "01114020345",
    nubmerOfCourses: "10",
    email: "devahmedahmed@gmail.com",
  },
  {
    id: 2,
    name: "Sara Ali",
    date: "15/3/2001",
    phone: "01022334455",
    nubmerOfCourses: "7",
    email: "sara.ali@example.com",
  },
  {
    id: 3,
    name: "Mohamed Tarek",
    date: "9/12/2000",
    phone: "01234567890",
    nubmerOfCourses: "5",
    email: "mohamed.tarek@example.com",
  },
  {
    id: 4,
    name: "Fatma Hassan",
    date: "21/7/2002",
    phone: "01111222333",
    nubmerOfCourses: "8",
    email: "fatma.hassan@example.com",
  },
  {
    id: 5,
    name: "Youssef Ibrahim",
    date: "30/9/2003",
    phone: "01099887766",
    nubmerOfCourses: "4",
    email: "youssef.ibrahim@example.com",
  },
  {
    id: 6,
    name: "Laila Mostafa",
    date: "12/4/2000",
    phone: "01200334455",
    nubmerOfCourses: "6",
    email: "laila.mostafa@example.com",
  },
  {
    id: 7,
    name: "Omar Khaled",
    date: "8/6/2001",
    phone: "01055667788",
    nubmerOfCourses: "9",
    email: "omar.khaled@example.com",
  },
  {
    id: 8,
    name: "Nour El-Din",
    date: "2/11/1999",
    phone: "01133445566",
    nubmerOfCourses: "3",
    email: "nour.eldin@example.com",
  },
  {
    id: 9,
    name: "Hala Sherif",
    date: "25/5/2002",
    phone: "01299887766",
    nubmerOfCourses: "11",
    email: "hala.sherif@example.com",
  },
  {
    id: 10,
    name: "Kareem Adel",
    date: "17/2/2003",
    phone: "01011223344",
    nubmerOfCourses: "2",
    email: "kareem.adel@example.com",
  },
];

function StudentsTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.students}
        data={students}
        renderRow={renderRow(StudentRow)}
        pageSize={20}
        resaultsCount={students.length}
        isLoading={false}
      />
    </>
  );
}

export default StudentsTable;
