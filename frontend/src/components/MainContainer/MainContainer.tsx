import VotingFormContainer from "../VotingForm/VotingFormContainer";
import RankingContainer from "../Ranking/RankingContainer";
import { useState } from "react";
import {
  MainContainerStyled,
  MainContainerInnerStyled,
} from "./styles/MainContainerStyles";

const MainContainer = () => {
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const handleVoteSubmission = () => {
    setVoteSubmitted(!voteSubmitted);
  };

  return (
    <MainContainerStyled>
      <MainContainerInnerStyled>
        <VotingFormContainer onVoteSubmit={handleVoteSubmission} />
        <RankingContainer voteSubmitted={voteSubmitted} />
      </MainContainerInnerStyled>
    </MainContainerStyled>
  );
};

export default MainContainer;
