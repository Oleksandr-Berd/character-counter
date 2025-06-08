import styled from "@emotion/styled";
import { Field } from "formik";

export const AnalyzeConsoleStyled = styled.div`
  margin-bottom: 40px;

  text-align: center;

  @media (min-width: 1280px){
    margin-bottom: 48px;
  }
`;

export const ConsoleTitleStyled = styled.h3`
  margin-bottom: 40px;

  font-size: 40px;
  letter-spacing: -1px;
  font-weight: ${({ theme }) => theme.weight.bold};

  color: ${({ theme }) => theme.colors.title};

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 1280px){
    margin-bottom: 48px;
  }
`;

export const TextareaStyled = styled(Field)`
  width: 100%;

  margin-bottom: 16px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;

  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.6px;

  color: #2A2B37;
  background-color: #e4e4ef;

  border-radius: 12px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SettingsCon = styled.div`
  text-align: left;

  font-size: 16px;
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: 1.3;
  letter-spacing: -0.6px;

  color: ${({ theme }) => theme.colors.content};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 12px;

  & > label:not(:last-of-type) {
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > label:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
`;

export const CheckStyled = styled(Field)`
  margin-bottom: 0;
  margin-right: 12px;
`;

export const ErrorStyled = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translate(4px, -4px);

  display: flex;
  flex-direction: row;
  align-items: center;

  text-align: left;

  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.light};

  color: #da3701;

  & > img {
    margin-right: 8px;

    &.no-icon > img {
      display: none;
    }
  }
`;
