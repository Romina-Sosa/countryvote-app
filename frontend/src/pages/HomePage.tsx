import React from 'react';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import VotesFormComponent from '../components/MainContainer';
import styled from 'styled-components';

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap:50px;
`

function HomePage() {
  return (
    <HomePageStyled>
			<NavbarContainer />
			<VotesFormComponent />
    </HomePageStyled>
  );
}

export default HomePage;
