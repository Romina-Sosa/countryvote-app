import { RANKING_CONTENT } from "../../utils/constans";
import searchBarLogo from "../../assets/searchBarLogo.svg";
import { SearchBarContainer, SearchInput } from "./styles/RankingStyles";
import { useState, SetStateAction, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <SearchBarContainer>
      <img src={searchBarLogo} alt="searchBarLogo" />
      <SearchInput
        type="text"
        placeholder={RANKING_CONTENT.PLACEHOLDER}
        value={query}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
