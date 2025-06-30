import styled from "styled-components";
import MainNav from "./layout/MainNav";
import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Icon

const StyledSidebar = styled.aside`
  padding: 3.2rem 0;
  border-right: 1px solid var(--color-grey-100);
  width: ${(props) => (props.$open ? "20rem" : "6rem")};
  transition: width 0.4s ease;
  ${"" /* overflow: hidden; */}
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  position: relative;
  background-color: white;
`;

// 👇 Toggle Icon Button
const ToggleButton = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -22px;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  background-color: var(--color-grey-300);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-grey-200);
  }

  svg {
    font-size: 1.9rem;
  }
`;

function Sidebar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(!isMobile);

  function toggleSidebar() {
    setOpen((prev) => !prev);
  }

  return (
    <StyledSidebar $open={open}>
      <ToggleButton onClick={toggleSidebar}>
        {open ? <FiChevronLeft /> : <FiChevronRight />}
      </ToggleButton>
      <MainNav isOpen={open} /> {/* Optional: pass `open` state to nav */}
    </StyledSidebar>
  );
}

export default Sidebar;
