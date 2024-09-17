import { RANKING_CONTENT } from "../../utils/constans";
import SearchBar from "./SearchBar";
import TableContainer from "./TableCointainer";
import {
  RankingContainerStyled,
  TitleOfRankingStyled,
} from "./styles/RankingStyles";

const RankingContainer = () => {
  return (
    <RankingContainerStyled>
      <TitleOfRankingStyled>
        {RANKING_CONTENT.TOP_COUNTRIES}
      </TitleOfRankingStyled>
      <SearchBar />
      <TableContainer />
    </RankingContainerStyled>
  );
};

export default RankingContainer;
