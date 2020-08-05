import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.nav`
  background: #dfdbeb;
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

export const Content = styled.figure`
  flex: 1;
  background: url(${logo}) no-repeat left;

  /* ver como colocar essa logo na esquerda e o tamanho  */
  display: inline;
`;
