import BasicTable from "./TopCountriesTable";
import { TableContainerStyled } from "./styles/RankingStyles";

const TableContainer = () => {
  return (
    <TableContainerStyled>
      <BasicTable />
    </TableContainerStyled>
  );
};

export default TableContainer;
