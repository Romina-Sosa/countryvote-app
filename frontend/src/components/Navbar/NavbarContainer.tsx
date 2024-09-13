import React from 'react';
import styled from 'styled-components';
import { NAVBAR_CONTENT } from '../../utils/constans';
import logo from '../../assets/logo.svg'
import vector from '../../assets/vector.svg'

const StyledNavbarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #15172A;
  font-weight: 600;
`;

const StyledNavbarLogo = styled.nav`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;

const StyledNavbarLoopstudio = styled.nav`
  display: flex;
  font-size: 22px;
  padding: 10px;
  font-weight: 500;
`;

const StyledNavbarChallenge = styled.nav`
  padding: 10px;
  display: flex;
  font-size: 14px;  
`;

const NavbarContainer = () => {
    return (
        <StyledNavbarContainer>
            <StyledNavbarLogo>
              <img src={logo} alt="Logo"/>
            </StyledNavbarLogo>
            <StyledNavbarLoopstudio>
                {NAVBAR_CONTENT.COMPANY_NAME}
            </StyledNavbarLoopstudio>
              <img src={vector} alt="vector"  />
            <StyledNavbarChallenge>
                {NAVBAR_CONTENT.CHALLENGE_NAME}
            </StyledNavbarChallenge>
        </StyledNavbarContainer>
    );
};

export default NavbarContainer;
