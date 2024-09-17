import TopCountries from "./TopCountriesTable";
import { TableContainerStyled } from "./styles/RankingStyles";

interface TableContainerProps {
  query?: string;
  voteSubmitted: boolean;
}

const TableContainer: React.FC<TableContainerProps> = ({
  query,
  voteSubmitted,
}) => {
  return (
    <TableContainerStyled>
      <TopCountries query={query} voteSubmitted={voteSubmitted} />
    </TableContainerStyled>
  );
};

export default TableContainer;
