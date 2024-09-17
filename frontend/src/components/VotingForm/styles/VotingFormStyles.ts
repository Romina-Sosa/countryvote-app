import styled from "styled-components";

// Styles from the component VotingFormContainer.tsx
export const VotingFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 16px;
  border-radius: 20px;
  align-items: start;
  gap: 14px;
`;

export const TitleFormStyled = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-name: 'Inter Bold';
  color: #15172A;
`
export const SubmittedVoteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  gap:14px; 
`

// Styles from the component InputsForm.tsx
export const InputsFormsStyled = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputStyled = styled.input`
  display: flex;
  padding: 7px 14px; 
  border-radius: 10px;
  border: 1px solid #EFEFEF;
`;

export const SelectStyled = styled.select`
  display: flex;
  padding: 7px 14px; 
  border-radius: 10px;
  border: 1px solid #EFEFEF;
`

export const SubmitStyled = styled.input`
  display: flex;
  padding: 9px 16px; 
  border-radius: 8px;
  border: 1px solid #EFEFEF;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: white;
  background-color: #15172A;

   &:disabled {
    background-color: #EDEDED; 
    color: #A3A3A3;
    cursor: not-allowed; 
  }
`;
