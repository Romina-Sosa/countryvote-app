import TopCountries from "./TopCountriesTable";
import { TableContainerStyled } from "./styles/RankingStyles";

interface TableContainerProps {
  query?: string;
}

const TableContainer: React.FC<TableContainerProps> = ({ query }) => {
  return (
    <TableContainerStyled>
      <TopCountries query={query} />
    </TableContainerStyled>
  );
};

export default TableContainer;
