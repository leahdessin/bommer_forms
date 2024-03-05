import React, {MouseEventHandler, useState} from 'react';
import styled from 'styled-components';
import { filterByColumn } from '../../../logLineSlice';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import { StyledCell } from '../../styles/TableElements';
import { FilterableColumnProps } from './types';

const FilterableCell = styled(StyledCell)<{ $isExpanded?: boolean }>`
    background-color: ${props => props.$isExpanded ? '#444' : 'inherit'};
`;

const ColumnDisplayName =  styled.div<{ $isExpanded?: boolean; }>`
    font-weight: ${props => props.$isExpanded ? 'bold' : 'inherit'};
`;

const TriggerIcon = styled.span`
    padding: 3px;
    vertical-align: middle;

    &:hover {
        cursor: pointer;
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    right: 20px;
`;

const DropdownContent = styled.div<{ $isExpanded?: boolean; }>`
    display: ${props => props.$isExpanded ? 'block' : 'none'};
    position: absolute;
    top: 20px;
    background-color: #111;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border: 1px solid #fff;
`;

const DropdownItem = styled.div<{ $isSelected?: boolean; }>`
    padding: 12px 16px;
    display: block;
    background-color: ${props => props.$isSelected ? '#444' : 'inherit'};
    font-weight: ${props => props.$isSelected ? 'bold' : 'inherit'};
    
    &:hover {
        background-color: #444;
        cursor: pointer;
    }
`;


function FilterableColumn(props:FilterableColumnProps) {
    const dispatch = useAppDispatch();
    const filterableColumn = useAppSelector((state) => state.logLinesStateSlice.filterColumns.find(column => column.columnName === props.name));

    const [isExpanded, setExpanded] = useState(false);

    const toggleDropdownClick= (e:any) => {
        setExpanded(!isExpanded);
    }
    const filterAction = (e:any) => {
        dispatch(filterByColumn([props.name, e.target.getAttribute('data-optionName')]));
    }
    let currentlySelectedFilters:string[] = [];
    if(filterableColumn) {
        currentlySelectedFilters = filterableColumn.currentlyFilteredOptions;
    }
    const dropdownItems = props.filterOptions.map(item => (
        <DropdownItem $isSelected={currentlySelectedFilters.includes(item.name)} data-optionName={item.name} onClick={filterAction}>{item.displayName}</DropdownItem>
    ));

    return (
        <FilterableCell $isExpanded={isExpanded}>
            <ColumnDisplayName $isExpanded={isExpanded}>{props.displayName}</ColumnDisplayName>
            <TriggerIcon onClick={toggleDropdownClick}>+</TriggerIcon>
            <DropdownContainer>
                <DropdownContent $isExpanded={isExpanded}>
                    {dropdownItems}
                </DropdownContent>
            </DropdownContainer>
        </FilterableCell>
    )
}

export default FilterableColumn;