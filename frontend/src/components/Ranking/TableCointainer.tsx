import React from 'react';
import styled from 'styled-components';
import BasicTable from './ReactTable';

const TableContainerStyled = styled.div`
  display: flex;
  width: 100%;
`
const TableContainer = () => {
  return(
    <TableContainerStyled>
      <BasicTable/>
    </TableContainerStyled>
  )
}

export default TableContainer