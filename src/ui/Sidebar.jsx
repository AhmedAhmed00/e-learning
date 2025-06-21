import styled from "styled-components";
import MainNav from "./layout/MainNav";
// import Logo from "./Logo";

const StyledSidebar = styled.aside`
  padding: 3.2rem 0 3.2rem 0rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
