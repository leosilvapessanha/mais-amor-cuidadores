import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #b2d5e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  margin: 0 20 0 20;
  padding: 0 20 0 20;
  box-sizing: border-box;
  outline: 0;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
`;

// import { createGlobalStyle } from 'styled-components';

// export default createGlobalStyle`
// * {
//     margin: 0;
//     padding: 0;
//     outline: 0;
//     box-sizing: border-box;
//   }
//   body {
//     background: #312e38;
//     color: #fff;
//     -webkit-font-smoothing: antialiased;
//   }
//   body, input, button {
//     font: 16px 'Roboto Slab', sans-serif;
//     font-size: 16px;
//   }
//   h1, h2, h3, h4, h5, h6, strong {
//     font-weight: 500;
//   }
//   button {
//     cursor: pointer;
//   }
// `;
