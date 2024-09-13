import React from 'react';
import styled from 'styled-components';
import { RANKING_CONTENT } from '../../utils/constans';
import searchBarLogo from '../../assets/searchBarLogo.svg';

export const SearchBarContainer = styled.div`
  display: flex;
  background-color: #FDFDFD;
  gap: 12px;
  padding: 10px 24px;
  border-radius: 8px;
  width: 55%;
  border: 1px solid #EFEFEF
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  width: -webkit-fill-available;
`;

export const SearchIcon = styled.span`
  font-size: 2px;
  color: #888;
  margin-left: 0.5rem;
`;

const SearchBar = () => {
    return (
      <SearchBarContainer>
        <img src={searchBarLogo} alt="searchBarLogo" />
        <SearchInput type="text" placeholder={RANKING_CONTENT.PLACEHOLDER}/>
      </SearchBarContainer>
    );
  };

  export default SearchBar;