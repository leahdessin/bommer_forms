import React from 'react';
import styled from 'styled-components';
import BommerLogTable from "../collection/BommerLogTable";

const StyledContentPane = styled.main`
    flex: 1;
    margin: 1px;
    height: 80%;
    padding: 0 5px;
`;

function BommerContentPane() {
    return (
        <StyledContentPane>
            <BommerLogTable />
        </StyledContentPane>
    );
}

export default BommerContentPane;