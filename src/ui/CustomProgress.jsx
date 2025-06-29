import styled from "styled-components";

export const CustomProgress = styled.progress`
  width: 100%;
  height: 14px;
  border-radius: 10px;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background-color: ${(props) => props.bg || "#f0f0f0"};
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.color || "#4caf50"};
    border-radius: 10px;
  }

  &::-moz-progress-bar {
    background-color: ${(props) => props.color || "#4caf50"};
  }
`;
