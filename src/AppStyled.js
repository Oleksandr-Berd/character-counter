import styled from "@emotion/styled";

export const AppStyled = styled.div`
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: ${(props) => props.theme.colors.bg};

  @media (min-width: 768px) {
    padding-bottom: 92px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1280px){
  width: 992px;

  margin-left: auto;
  margin-right: auto;

  padding-bottom: 64px;
  padding-left: 0;
  padding-right: 0;
  }
`;
