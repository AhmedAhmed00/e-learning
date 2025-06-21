// 🔁 Reusable constants for common keys
const NAME = "name";
const EMAIL = "email";
const STATUS = "status";
const ACTIONS = "actions";
const DATE = "date";
const PHONE = "phone";

export const TABLE_HEADERS = {
  orders: ["orderNumber", "student", "course", DATE, "total", STATUS, ACTIONS],

  courses: [
    "course",
    "instructor",
    "price",
    "totalStudents",
    "type",
    STATUS,
    ACTIONS,
  ],

  instructors: [
    "instructor",
    "numberOfCourses",
    "specialization",
    EMAIL,
    ACTIONS,
  ],

  students: [NAME, DATE, PHONE, "numberOfCourses", EMAIL, ACTIONS],

  roles: ["role", "numberOfEmployees", PHONE, "description", ACTIONS],

  employees: [NAME, "role", DATE, EMAIL, STATUS, ACTIONS],
};
