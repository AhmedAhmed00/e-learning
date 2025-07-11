import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();
  const { t } = useTranslation();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          {t("common.pageNotFound")}
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; {t("common.goBack")}
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
