import Row from "./Row";
import { useWatch } from "react-hook-form";

function RadioGroup({ label, name, options, register, control }) {
  const selectedValue = useWatch({ control, name });

  return (
    <div>
      {label && (
        <label
          style={{ fontWeight: 500, display: "block", marginBottom: "0.5rem" }}
        >
          {label}
        </label>
      )}

      <Row
        justify="start"
        style={{
          flexDirection: "row",
          gap: "2rem",
          marginTop: "0.5rem",
        }}
      >
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <label
              key={option.value}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register(name)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    margin: 0,
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                />

                {/* Outer Circle */}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid var(--color-grey-400)",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Inner dot */}
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: isSelected
                        ? "var(--color-primary)"
                        : "transparent",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                  />
                </div>
              </div>

              <span>{option.label}</span>
            </label>
          );
        })}
      </Row>
    </div>
  );
}

export default RadioGroup;
