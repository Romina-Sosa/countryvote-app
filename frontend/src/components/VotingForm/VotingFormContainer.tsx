import { useState } from "react";
import { VOTE_CONTENT } from "../../utils/constans";
import InputsForms from "./InputsForm";
import checkCircle from "../../assets/checkCircle.svg";
import {
  VotingFormStyled,
  TitleFormStyled,
  SubmittedVoteStyled,
} from "./styles/VotingFormStyles";

const VotingFormContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmission = () => {
    setIsSubmitted(true);
  };

  return (
    <VotingFormStyled>
      {!isSubmitted ? (
        <>
          <TitleFormStyled>{VOTE_CONTENT.VOTE_FORM}</TitleFormStyled>
          <InputsForms onFormSubmit={handleFormSubmission} />
        </>
      ) : (
        <SubmittedVoteStyled>
          <img src={checkCircle} alt="checkCircle" />
          {VOTE_CONTENT.SUBMITTED_VOTE}
        </SubmittedVoteStyled>
      )}
    </VotingFormStyled>
  );
};

export default VotingFormContainer;
