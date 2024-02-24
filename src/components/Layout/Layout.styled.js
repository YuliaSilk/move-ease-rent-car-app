import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(4)};
padding: ${p => p.theme.spacing(4)};
margin: 0 auto;
max-width: 1200px;
background-color: green;
`;

// export const Link = styled(NavLink)`
//    margin-right: 24px;
//    text-decoration: none;
//    color: ${({ theme }) => theme.colors.acent};
//    font-size: 26px;
//    font-weight: 600;

//   &.active {
//     color: ${({ theme }) => theme.colors.active};
//   }
// `;

// const HeaderStyle = styled.header`
// display: flex;
// position: relative;
// justify-content: space-between;
// top: 0;  
// left: 0;
// position: sticky;
// z-index: 1100;
// justify-content: center;
// align-items: center;
// width: 100%;
// min-height: 48px;
// padding: ${p => p.theme.spacing(2)};
// background-color: red;
// box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
// `;