import React from 'react';
import styled from 'styled-components';
import BommerLogSearchBar from './BommerLogSearchBar';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
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