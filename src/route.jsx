// routes.js
import { Navigate } from "react-router-dom";

import Dash from "./features/dashboard/Dash";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./features/authentication/Unauthorized";

import AppLayout from "./ui/layout/AppLayout";

import Orders from "./pages/Orders";

import RolesAndEmployees from "./pages/RolesAndEmployees";

import Employees from "./pages/Employees";
import JobRoles from "./pages/JobRoles";

import ForgetPassword from "./features/authentication/ForgetPassword";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Students from "./pages/students";
import CourseForm from "./features/courses/CourseForm";
import CourseVeiw from "./features/courses/course-view/CourseVeiw";
import GeneralInfo from "./features/courses/course-view/GeneralInfo";
import CourseDetails from "./features/courses/course-view/CourseDetails";
import CourseChapter from "./features/courses/course-view/CourseChapter";
import CourseChapterForm from "./features/courses/forms/CourseChapterForm";

const protectedRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dash /> },

      { path: "/courses", element: <Courses /> },
      {
        path: "/courses/:id",
        element: <CourseVeiw />,
        children: [
          { index: true, element: <Navigate replace to="general-info" /> },
          { path: "general-info", element: <GeneralInfo /> },
          { path: "course-details", element: <CourseDetails /> },
        ],
      },
      {
        path: "/courses/:id/course-details/chapter-form",
        element: <CourseChapterForm />,
      },
      { path: "/courses/:id/course-details/:id", element: <CourseChapter /> },

      {
        path: "/courses/course-form",
        element: <CourseForm />,
      },

      { path: "/orders", element: <Orders /> },
      { path: "/instructors", element: <Instructors /> },
      { path: "/students", element: <Students /> },
      { path: "/roles", element: <JobRoles /> },
      { path: "/employees", element: <Employees /> },
      {
        path: "/employees-and-roles/employees",
        element: <RolesAndEmployees />,
      },

      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },
];

const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "auth/forget-password", element: <ForgetPassword /> },
  { path: "*", element: <PageNotFound /> },
];

export { protectedRoutes, publicRoutes };
