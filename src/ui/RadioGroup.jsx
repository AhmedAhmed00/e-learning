import { useWatch } from "react-hook-form";
import styled from "styled-components";
import Row from "./Row";

export const Label = styled.label`
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
`;

export const OptionsWrapper = styled(Row)`
  flex-direction: row;
  gap: 2rem;
  margin-top: 0.5rem;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

export const RadioWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HiddenRadio = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
  z-index: 2;
`;

export const OuterCircle = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-grey-400);
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ selected }) =>
    selected ? "var(--color-primary)" : "transparent"};
  transition: background-color 0.2s ease-in-out;
`;

function RadioGroup({ label, name, options, register, control }) {
  const selectedValue = useWatch({ control, name });

  return (
    <div>
      {label && <Label>{label}</Label>}

      <OptionsWrapper justify="start">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <OptionLabel key={option.value}>
              <RadioWrapper>
                <HiddenRadio
                  type="radio"
                  value={option.value}
                  {...register(name)}
                />
                <OuterCircle>
                  <InnerDot selected={isSelected} />
                </OuterCircle>
              </RadioWrapper>
              <span>{option.label}</span>
            </OptionLabel>
          );
        })}
      </OptionsWrapper>
    </div>
  );
}

export default RadioGroup;
