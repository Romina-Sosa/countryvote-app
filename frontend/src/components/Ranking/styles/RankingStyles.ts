import styled from "styled-components";

// Ranking container styles

export const RankingContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

export const TitleOfRankingStyled = styled.div`
  display: flex;
  font-weight: 700;
  color: #15172a;
  font-size: 32px;
  line-height: 24px;
`;

// SearchBar styles

export const SearchBarContainer = styled.div`
  display: flex;
  background-color: #fdfdfd;
  gap: 12px;
  padding: 10px 24px;
  border-radius: 8px;
  width: 55%;
  border: 1px solid #efefef;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  width: -webkit-fill-available;
`;

// TableContainer styles

export const TableContainerStyled = styled.div`
  display: flex;
  width: 100%;
`;
