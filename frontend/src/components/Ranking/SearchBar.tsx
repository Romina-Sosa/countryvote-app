import { RANKING_CONTENT } from "../../utils/constans";
import searchBarLogo from "../../assets/searchBarLogo.svg";
import { SearchBarContainer, SearchInput } from "./styles/RankingStyles";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <img src={searchBarLogo} alt="searchBarLogo" />
      <SearchInput type="text" placeholder={RANKING_CONTENT.PLACEHOLDER} />
    </SearchBarContainer>
  );
};

export default SearchBar;
