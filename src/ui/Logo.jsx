import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  width: ${({ $w }) => $w && `${$w}`};
  height: ${({ $h }) => $h && `${$h}`};
  margin: auto;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  padding: 4px;
  margin-bottom: 10px;
  transition: width 0.3s ease;
`;

const Img = styled.img`
  border-radius: 20px;

  width: 100%;
`;

function Logo({ w = "100%", h = "200px", isOpen }) {
  const isMobile = useIsMobile();
  return (
    <StyledLogo $w={w} $h={h}>
      <Img src="/Logo.png" alt="Logo" />

      {!isMobile && isOpen ? (
        <p style={{ color: "#61613C", fontSize: "20px", fontWeight: "bold" }}>
          PlatCourse
        </p>
      ) : (
        ""
      )}
    </StyledLogo>
  );
}

export default Logo;
