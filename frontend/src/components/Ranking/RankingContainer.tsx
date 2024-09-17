import { useState } from "react";
import { RANKING_CONTENT } from "../../utils/constans";
import SearchBar from "./SearchBar";
import TableContainer from "./TableCointainer";
import {
  RankingContainerStyled,
  TitleOfRankingStyled,
} from "./styles/RankingStyles";

const RankingContainer = () => {
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
      <TableContainer query={query} />
    </RankingContainerStyled>
  );
};

export default RankingContainer;
