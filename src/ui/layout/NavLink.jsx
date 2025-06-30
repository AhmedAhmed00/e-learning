import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;

  &:i {
    color: var(--color-text);
  }
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    color: var(--color-grey-800);
    font-size: 1.5rem;
    font-weight: 600;
    padding: ${({ isOpen }) => (isOpen ? "1rem 0.8rem" : "1rem 0rem")};
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #f9f9f9;
    background-color: var(--color-primary);
    ${"" /* border-radius: var(--border-radius-sm); */}
    border-radius: ${({ isOpen }) => (isOpen ? "0 8px 8px 0;" : "5px")};
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    margin: ${({ isOpen }) => !isOpen && "auto"};

    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-light);
  }
`;
