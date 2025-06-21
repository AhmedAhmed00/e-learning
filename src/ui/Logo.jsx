import styled from "styled-components";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  width: ${({ $w }) => $w && `${$w}`};
  height: ${({ $h }) => $h && `${$h}`};
  margin: auto;
  gap: 4px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 26px;
`;

const Img = styled.img`
  border-radius: 30px;

  width: 100%;
`;

function Logo({ w = "200px", h = "200px" }) {
  return (
    <StyledLogo $w={w} $h={h}>
      <Img src="/Logo.png" alt="Logo" />
      <p style={{ color: "#61613C", fontSize: "20px", fontWeight: "bold" }}>
        PlatCourse
      </p>
    </StyledLogo>
  );
}

export default Logo;
