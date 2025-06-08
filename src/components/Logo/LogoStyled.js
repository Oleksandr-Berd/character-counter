import styled from "@emotion/styled";

export const LogoStyled = styled.div`
display: flex;
flex-direction: row;
align-items: center;

color: ${({theme}) => theme.colors.title};

font-size: 18px;
line-height: 1.3;
letter-spacing: -0.75px;
font-weight: ${({theme}) => theme.weight.semiBold};

& > img{
    width: 24px;
    height: 30px;

    margin-right: 8px;
}
`