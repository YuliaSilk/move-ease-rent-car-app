import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

position: relative;
top: 0;  
left: 0;
position: sticky;
z-index: 1100;
/* justify-content: center; */
width: 100%;
min-height: 48px;
padding: ${p => p.theme.spacing(2)};
background-color: ${({ theme }) => theme.colors.main};
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

`;

export const Link = styled(NavLink)`
   margin-right: 100px;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.colorwerbs};
   font-size: 26px;
   font-weight: 600;

  &.active {
    color: ${({ theme }) => theme.colors.acent};
  }
`