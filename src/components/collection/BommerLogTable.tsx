import React from 'react';
import styled from 'styled-components';
import BommerLogTableHeader from "./BommerLogTableHeader";
import BommerLogTableBody from "./BommerLogTableBody";

const StyledTable = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
`;

export default function BommerLogTable(){
    return (
        <StyledTable>
            <BommerLogTableHeader />
            <BommerLogTableBody />
        </StyledTable>
    )
}