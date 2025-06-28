import styled from "styled-components";
import Header from "./layout/Header";

export const Container = styled.div`
  padding: ${(props) => props.padding || "0px 35px"};
`;

export function Section({ title, children }) {
  return (
    <>
      <Header title={title} />
      <Container>{children}</Container>
    </>
  );
}
