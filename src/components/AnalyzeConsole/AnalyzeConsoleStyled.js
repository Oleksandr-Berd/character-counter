import styled from "@emotion/styled";
import { Field } from "formik";

export const AnalyzeConsoleStyled = styled.div`
  margin-bottom: 40px;

  text-align: center;
`;

export const ConsoleTitleStyled = styled.h3`
  margin-bottom: 40px;

  font-size: 40px;
  letter-spacing: -1px;
  font-weight: ${({ theme }) => theme.weight.bold};

  color: ${({ theme }) => theme.colors.title};
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

  color: ${({ theme }) => theme.colors.content};
  background-color: #e4e4ef;

  border-radius: 12px;
`;

export const SettingsCon = styled.div`
  text-align: left;

  font-size: 16px;
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: 1.3;
  letter-spacing: -0.6px;

  color: ${({ theme }) => theme.colors.content};
`;

export const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;

  & > label:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const CheckStyled = styled(Field)`
  margin-right: 12px;
`;

export const ErrorStyled = styled.div`
  text-align: left;

  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.light};

  color: #da3701;

  & > img{
    &.no-icon > img{
        display: none;
    }
  }
`;


