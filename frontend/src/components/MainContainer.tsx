import React from 'react';
import styled from 'styled-components';
import VotingFormContainer from './VotingForm/VotingFormContainer';
import RankingContainer from './Ranking/RankingContainer';

export const MainContainerStyled = styled.div`
  display: flex;
  width: 100%;
`;

const MainContainerInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 48px;  
`

const MainContainer = () => {
    return (
      <MainContainerStyled>
        <MainContainerInnerStyled>
          <VotingFormContainer/>
          <RankingContainer/>
        </MainContainerInnerStyled>
      </MainContainerStyled>
    );
  };

export default MainContainer;
