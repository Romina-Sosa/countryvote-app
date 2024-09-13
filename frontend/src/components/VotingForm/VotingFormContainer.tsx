import React, { useState } from 'react';
import styled from 'styled-components';
import InputsForms from './InputsForm';
import { VOTE_CONTENT } from "../../utils/constans";
import checkCircle from '../../assets/checkCircle.svg';

const VotingFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 16px;
  border-radius: 20px;
  align-items: start;
  gap: 14px;
`;

const TitleFormStyled = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-name: 'Inter Bold';
  color: #15172A;
`
const SubmittedVoteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  gap:14px; 
`
const VotingFormContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleFormSubmission = () => {
    setIsSubmitted(true);
  };
  
  return(
    <VotingFormStyled>
      {!isSubmitted ? (
        <>
          <TitleFormStyled>{VOTE_CONTENT.VOTE_FORM}</TitleFormStyled>
          <InputsForms onFormSubmit={handleFormSubmission} />
        </>
      ) : (
        <SubmittedVoteStyled>
          <img src={checkCircle} alt="checkCircle"  />
          {VOTE_CONTENT.SUBMITTED_VOTE}
        </SubmittedVoteStyled>
      )}
    </VotingFormStyled>
  );
}

export default VotingFormContainer;