import {
  HiOutlineViewGrid,
  HiOutlineCollection,
  HiOutlineCube,
  HiOutlineClipboardList,
  HiOutlineTag,
} from "react-icons/hi";
import { StyledNavLink } from "./NavLink";
import Logo from "../Logo";
import Heading from "../Heading";
import { useAuth } from "../../context/AuthContext";
import { CiLogout } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { NavList } from "../NavList";
const navItems = [
  { path: "/dashboard", icon: <HiOutlineViewGrid />, label: "overview" },
  { path: "/courses", icon: <HiOutlineCollection />, label: "courses" },
  { path: "/instructors", icon: <HiOutlineCube />, label: "instructors" },
  { path: "/orders", icon: <HiOutlineCube />, label: "orders" },
  { path: "/students", icon: <HiOutlineCube />, label: "students" },
  { path: "/roles", icon: <HiOutlineClipboardList />, label: "roles" },
  { path: "/employees", icon: <HiOutlineTag />, label: "employees" },
];

function MainNav() {
  const { logout } = useAuth();
  const { t } = useTranslation();
  return (
    <nav>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          textAlign: "center",

          marginBottom: "0px",
        }}
      >
        <Logo w={"20%"} h={"100%"} />
      </div>

      <NavList>
        {navItems?.map((item, index) => (
          <li key={index}>
            <StyledNavLink to={item.path}>
              {item.icon}
              <Heading as={"h4"}>{t(`routes.${item.label}`)}</Heading>
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      <StyledNavLink
        to={"/login"}
        onClick={() => {
          logout();
        }}
      >
        <CiLogout fontWeight={"bold"} color="var(--color-red-800)" />
        <Heading as={"h4"} color="red">
          {t("common.logout")}
        </Heading>
      </StyledNavLink>
    </nav>
  );
}

export default MainNav;
