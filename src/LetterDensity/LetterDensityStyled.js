import styled from "@emotion/styled";

import cutIcon from "../assets/images/cutIcon.png";

export const LetterDensityStyled = styled.div`

  & > h3 {
    margin-bottom: 20px;

    font-size: 24px;
    font-weight: ${({ theme }) => theme.weight.semiBold};

    color: ${({theme}) => theme.colors.title};
  }
`;

export const ToggleCutBtnStyled = styled.button`
  align-content: center;

  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.6;
  font-weight: ${({ theme }) => theme.weight.regular};

  color: ${({ theme }) => theme.colors.content};
  background-color: transparent;

  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(${cutIcon});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 8px;

    transform: ${({ isCutList }) => (!isCutList ? "rotate(180deg)" : null)};
  }
`;


export const ZeroOption = styled.p`
color: ${({theme})=> theme.colors.content};
`