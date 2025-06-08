import styled from "@emotion/styled";

export const SummaryStyled = styled.ul`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > li {
    position: relative;

    overflow: hidden;

    padding-top: 20px;
    padding-bottom: 28px;
    padding-left: 20px;
    padding-right: 20px;

    color: #12131a;

    border-radius: 12px;

    @media (min-width: 768px) {
      width: 200px;

      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 12px;
      padding-right: 0;

      text-align: left;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }

  & > li:nth-of-type(1) {
    background-color: #d3a0fa;

    &::after {
      position: absolute;

      right: 0;
      top: 0;

      transform: translate(36%, 0);

      width: 150px;
      height: 150px;

      display: inline-block;

      content: "";

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' fill='none' viewBox='0 0 150 150'%3E%3Cg clip-path='url(%23a)'%3E%3Cmask id='b' width='150' height='150' x='0' y='0' maskUnits='userSpaceOnUse' style='mask-type:luminance'%3E%3Cpath fill='%23fff' d='M150 150V0H0v150h150Z'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath fill='%23DEBAFC' fill-rule='evenodd' d='M113.25 0v21h.004c.2 8.732 7.341 15.75 16.121 15.75H150v4.5h-21c-8.699 0-15.75 7.051-15.75 15.75 0 8.698 7.051 15.75 15.75 15.75h21v4.5h-21c-8.699 0-15.75 7.052-15.75 15.75 0 8.699 7.051 15.75 15.75 15.75h21V114h-21c-8.699 0-15.75 7.052-15.75 15.75V150h-4.5v-21c0-8.698-7.052-15.75-15.75-15.75S77.25 120.302 77.25 129v21h-4.5v-21c0-8.698-7.052-15.75-15.75-15.75-8.699 0-15.75 7.052-15.75 15.75v21h-4.5v-20.25c0-8.698-7.052-15.75-15.75-15.75H0v-5.25h21c8.698 0 15.75-7.051 15.75-15.75 0-8.698-7.052-15.75-15.75-15.75H0v-4.5h21c8.698 0 15.75-7.052 15.75-15.75 0-8.699-7.052-15.75-15.75-15.75H0v-4.5h20.625c8.78 0 15.922-7.018 16.12-15.75h.005V0h4.5v21c0 8.698 7.051 15.75 15.75 15.75 8.698 0 15.75-7.052 15.75-15.75V0h4.5v21c0 8.698 7.052 15.75 15.75 15.75s15.75-7.052 15.75-15.75V0h4.5Zm-36 57c0 8.698 7.052 15.75 15.75 15.75s15.75-7.052 15.75-15.75c0-8.699-7.052-15.75-15.75-15.75S77.25 48.301 77.25 57Zm0 36c0 8.699 7.052 15.75 15.75 15.75s15.75-7.051 15.75-15.75c0-8.698-7.052-15.75-15.75-15.75S77.25 84.302 77.25 93ZM57 72.75c-8.699 0-15.75-7.052-15.75-15.75 0-8.699 7.051-15.75 15.75-15.75 8.698 0 15.75 7.051 15.75 15.75 0 8.698-7.052 15.75-15.75 15.75ZM41.25 93c0 8.699 7.051 15.75 15.75 15.75 8.698 0 15.75-7.051 15.75-15.75 0-8.698-7.052-15.75-15.75-15.75-8.699 0-15.75 7.052-15.75 15.75Z' clip-rule='evenodd'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M150 0v150H0V0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");

      @media (min-width: 768px) {
        transform: translate(56%, 0);
      }
    }
  }

  & > li:nth-of-type(2) {
    background-color: #ff9f00;

    &::after {
      position: absolute;

      right: 0;
      top: 0;

      transform: translate(36%, 0);

      width: 150px;
      height: 150px;

      display: inline-block;

      content: "";

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' fill='none' viewBox='0 0 150 150'%3E%3Cg clip-path='url(%23a)'%3E%3Cmask id='b' width='150' height='150' x='0' y='0' maskUnits='userSpaceOnUse' style='mask-type:luminance'%3E%3Cpath fill='%23fff' d='M150 0H0v150h150V0Z'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath fill='%23FFB844' fill-rule='evenodd' d='M0 0h50v50H0V0Zm100 50H50v50H0v50h50v-50h50v50h50v-50h-50V50Zm0 0h50V0h-50v50Z' clip-rule='evenodd'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h150v150H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    
      @media (min-width: 768px) {
      transform: translate(56%, 0);
    }
    }

  
  }

  & > li:nth-of-type(3) {
    background-color: #fe8159;

    &::after {
      position: absolute;

      right: 0;
      top: 0;

      transform: translate(36%, 0);

      width: 150px;
      height: 150px;

      display: inline-block;

      content: "";

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Cg clip-path='url(%23a)'%3E%3Cmask id='b' x='0' y='0' width='150' height='150' maskUnits='userSpaceOnUse' style='mask-type:luminance'%3E%3Cpath fill='%23fff' d='M0 0v150h150V0H0Z'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath fill='%23FA9A82' fill-rule='evenodd' d='M32.442 130.99V150h10.116v-19.01c0-7.418 6.014-13.432 13.432-13.432H94.01c7.418 0 13.432 6.014 13.432 13.432V150h10.116v-19.01c0-7.418 6.014-13.432 13.433-13.432H150v-10.116h-19.009c-7.419 0-13.433-6.013-13.433-13.432V55.99c0-7.418 6.014-13.432 13.433-13.432H150V32.442h-19.009c-7.419 0-13.433-6.014-13.433-13.432V0h-10.116v19.01c0 7.418-6.014 13.432-13.432 13.432H55.99c-7.418 0-13.432-6.014-13.432-13.432V0H32.442v19.01c0 7.418-6.014 13.432-13.432 13.432H0v10.116h19.01c7.418 0 13.432 6.014 13.432 13.432v38.02c0 7.419-6.014 13.432-13.432 13.432H0v10.116h19.01c7.418 0 13.432 6.014 13.432 13.432Zm75-55.99V55.99c0-7.418-6.014-13.432-13.432-13.432H55.99c-7.418 0-13.432 6.014-13.432 13.432v38.02c0 7.419 6.014 13.432 13.432 13.432H94.01c7.418 0 13.432-6.013 13.432-13.432V75Z' clip-rule='evenodd'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h150v150H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");

      @media (min-width: 768px) {
        transform: translate(56%, 0);
      }
    }
  }
`;
export const ResultStyled = styled.p`
  margin-bottom: 8px;

  font-size: 40px;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -1px;
`;

export const SubTitleStyled = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: 1.4;
  letter-spacing: -0.6px;
`;
