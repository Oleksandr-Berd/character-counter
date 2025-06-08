import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 1280xp) {
    margin-bottom: 24px;

    padding-top: 32px;
    padding-bottom: 24px;
  }
`;
