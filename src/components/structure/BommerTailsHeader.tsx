import React from 'react';
import styled from 'styled-components';
import BommerLogSearchBar from '../collection/BommerLogSearchBar';

const StyledHeader = styled.header`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    height: 20%;
`;

function BommerTailsHeader() {
    return (
        <StyledHeader>
            <BommerLogSearchBar />
        </StyledHeader>
    );
}

export default BommerTailsHeader;