import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & input[type="checkbox"] {
    height: 2rem;
    width: 2rem;
    margin-top: 10px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    margin-top: 10px;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function Checkbox({ checked, name, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
