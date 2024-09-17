import styled from "styled-components";

// Voting Form Container styles
export const VotingFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 20px;
  align-items: start;
  gap: 14px;
  padding-bottom: 40px;
`;

export const TitleFormStyled = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: #15172a;
`;
export const SubmittedVoteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  gap: 14px;
`;

// Inputs Form styles
export const InputsFormsStyled = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputStyled = styled.input<{ isInvalid?: boolean }>`
  display: flex;
  padding: 7px 14px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isInvalid ? "red" : "#efefef")};
`;

export const SelectStyled = styled.select<{ isPlaceHolder?: boolean }>`
  color: ${(props) => (props.isPlaceHolder ? "#8a8c90;" : "black")};
  display: flex;
  padding: 7px 14px;
  border-radius: 10px;
  border: 1px solid #efefef;
  background-color: white;

  option {
    color: black;
  }
`;

export const SubmitStyled = styled.input`
  display: flex;
  padding: 9px 16px;
  border-radius: 8px;
  border: 1px solid #efefef;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: white;
  background-color: #15172a;

  &:disabled {
    background-color: #ededed;
    color: #a3a3a3;
    cursor: not-allowed;
  }
`;
export const ErrorIconStyled = styled.img<{ show: boolean }>`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  position: relative;
`;

export const InvalidMessageStyled = styled.text<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: red;
  top: 120%;
`;
