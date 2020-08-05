import React from 'react';
import { Container, Content } from './style';
import logo from '../../assets/logo.png';

const NavBar: React.FC = () => (
  <>
    <Container>
      <img src={logo} alt="Logo of Mais amor cuidadores" />
      <Content />
    </Container>
  </>
);
export default NavBar;
