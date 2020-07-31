import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const Container = styled.div`
  background: #B2D5E3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  height:120px;
  margin: 0 0 0 0;
  padding: 0 0 0 0;

`

export const Logo = styled.figure`
  flex: 1;
  background: url(${logo}) no-repeat left;
  /* ver como colocar essa logo na esquerda e o tamanho  */
  display: inline;

`
