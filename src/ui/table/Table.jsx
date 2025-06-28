import styled from "styled-components";

export const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

export const Footer = styled.footer`
  ${"" /* background-color: var(--color-grey-50); */}
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  ${"" /* border-top: 1px solid var(--color-grey-200); */}

  &:not(:has(*)) {
    display: none;
  }
`;
