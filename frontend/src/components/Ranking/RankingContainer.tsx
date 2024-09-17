import { useState } from "react";
import { RANKING_CONTENT } from "../../utils/constans";
import SearchBar from "./SearchBar";
import TableContainer from "./TableCointainer";
import {
  RankingContainerStyled,
  TitleOfRankingStyled,
} from "./styles/RankingStyles";

interface RankingContainerProps {
  voteSubmitted: boolean;
}

const RankingContainer = ({ voteSubmitted }: RankingContainerProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <RankingContainerStyled>
      <TitleOfRankingStyled>
        {RANKING_CONTENT.TOP_COUNTRIES}
      </TitleOfRankingStyled>
      <SearchBar onSearch={handleSearch} />
      <TableContainer query={query} voteSubmitted={voteSubmitted} />
    </RankingContainerStyled>
  );
};

export default RankingContainer;
