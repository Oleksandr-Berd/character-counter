import styled from "@emotion/styled";

export const LettersStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  color: ${({theme}) => theme.colors.content};

`;

export const Scale = styled.div`
  width: 72%;
  height: 12px;

  margin-right: 12px;

   background: ${({ ratio, theme }) => {
    const parsedRatio = parseFloat(ratio); 
    const start = parsedRatio - 2;
    const end = parsedRatio + 2; 
    return `
      linear-gradient(
        to right,
        #d3a0fa 0%,
        #d3a0fa ${start}%,
        ${theme.colors.scale} ${end}%,
        ${theme.colors.scale} 100%
      )
    `;
  }};

  border-radius: 36px;
`;

export const LetterTitleStyled = styled.p`
  display: inline-block;

  width: 16px;

  margin-right: 12px;

`;

export const StatsStyled = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;

  text-align: left;
`;
