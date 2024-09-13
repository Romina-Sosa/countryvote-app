import React from 'react';
import styled from 'styled-components';
import { RANKING_CONTENT } from '../../utils/constans';
import SearchBar from './SearchBar';
import TableContainer from './TableCointainer';

const RankingContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 24px;
`;

const TitleOfRankingStyled = styled.div`
	display: flex;
	font-weight: 700;
	color: #15172A;
	font-size: 32px;
	line-height: 24px;
`;

const RankingContainer = () => {
	return(
		<RankingContainerStyled>
			<TitleOfRankingStyled>
				{RANKING_CONTENT.TOP_COUNTRIES}
			</TitleOfRankingStyled>
			<SearchBar/>
			<TableContainer/>
    </RankingContainerStyled>
    )
}

export default RankingContainer