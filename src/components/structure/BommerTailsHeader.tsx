import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    height: 20%;
`;

const SearchInput = styled.input`
    width: 50%;
    height: 40px;
    border: 2px solid rgb(0,87,155);
    border-radius: 12px;
    padding: 4px 8px;
    font-size: 25px;
  
    &:focus {
      border: 4px solid rgb(0,116,206);
      outline: rgb(0,116,206);
    }
`;

function BommerTailsHeader() {
    return (
        <StyledHeader>
            <SearchInput />
        </StyledHeader>
    );
}

export default BommerTailsHeader;