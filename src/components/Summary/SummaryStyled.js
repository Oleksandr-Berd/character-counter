import styled from "@emotion/styled";

export const SummaryStyled =styled.ul`
margin-bottom: 24px;

& > li{
    padding-top: 20px;
    padding-bottom: 28px;
    padding-left: 20px;
    padding-right: 20px;

    color: #12131A;

    border-radius: 12px;
}

& > li:not(:last-of-type){
    margin-bottom: 16px;
}

& >li:nth-of-type(1){
    background-color: #D3A0FA;
}

& >li:nth-of-type(2){
    background-color: #FF9F00;
}

& >li:nth-of-type(3){
    background-color: #FE8159;
}
`
export const ResultStyled = styled.p`
margin-bottom: 8px;

font-size: 40px;
font-weight: ${({theme}) => theme.weight.bold};
letter-spacing: -1px;
`

export const SubTitleStyled = styled.h3`
font-size: 20px;
font-weight: ${({theme}) => theme.weight.regular};
line-height: 1.4;
letter-spacing: -0.6px;
`