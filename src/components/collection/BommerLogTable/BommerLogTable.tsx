import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BommerLogLine from '../BommerLogLine';
import { StyledRow, StyledCell } from '../../styles/TableElements';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { fetchLogLinesFromBackend } from '../../../logLineSlice';
import FilterableColumn from './FilterableColumn';
import { filterableColumnsList } from './filterableColumns';

const TableBody = styled.div`
    flex: 1;
    overflow-y: scroll;
`;

export default function BommerLogTable(){

    const logLines = useAppSelector((state) => state.logLinesStateSlice.logLines);
    const filterColumns = useAppSelector((state) => state.logLinesStateSlice.filterColumns);
    for (const columnFromState of filterColumns) {
        for (const column of filterableColumnsList) {
            if(column.name === columnFromState.columnName) {

            }
        }
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLogLinesFromBackend())
    }, []);

    const renderedLogLines = logLines.filter(line => line.show).map(line => {

        return (
            <BommerLogLine {...line} />
        )
    });

    return (
        <>
            <StyledRow>
                <StyledCell><span>Line</span> <span>+</span></StyledCell>
                <FilterableColumn {...filterableColumnsList[0]} />
                <StyledCell>Timestamp</StyledCell>
                <StyledCell>Origin</StyledCell>
                <StyledCell>Thread</StyledCell>
                <StyledCell>Message</StyledCell>
            </StyledRow>
            <TableBody>
                {renderedLogLines}
            </TableBody>
        </>
    )
}