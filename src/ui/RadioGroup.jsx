import Row from "./Row";
import { useWatch } from "react-hook-form";

function RadioGroup({ label, name, options, register, control }) {
  const selectedValue = useWatch({ control, name });

  return (
    <div>
      {label && <label style={{ fontWeight: 500 }}>{label}</label>}

      <Row
        justify="start"
        style={{ flexDirection: "row", gap: "2rem", marginTop: "0.75rem" }}
      >
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <label
              key={option.value}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
                position: "relative",
                paddingLeft: "24px", // Space for custom radio button
              }}
            >
              <input
                type="radio"
                value={option.value}
                {...register(name, { required: true })}
                style={{
                  position: "absolute",
                  opacity: 0,
                  cursor: "pointer",
                  width: 0,
                  height: 0,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  padding: "2px",
                  borderRadius: "50%",
                  border: "2px solid var(--color-grey-400)",
                  backgroundColor: "#fff",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "0px",

                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: isSelected
                    ? "var(--color-primary)"
                    : "transparent",
                  opacity: isSelected ? 1 : 0,
                  transition: "opacity 0.2s",
                  pointerEvents: "none",
                }}
              />
              {option.label}
            </label>
          );
        })}
      </Row>
    </div>
  );
}

export default RadioGroup;
