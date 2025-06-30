import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const Main = styled.main`
  border: 1px solid var(--color-grey-200);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
