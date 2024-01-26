import React, {useState} from 'react';
import styled from "styled-components";

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


export default function BommerLogSearchBar(){
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e:any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }
    return (
        <SearchInput
            type='search'
            placeholder='search for log entries...'
            value={searchInput}
            onChange={handleSearch}
        />
    )
}