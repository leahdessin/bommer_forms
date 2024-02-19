import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import BommerLogLine from '../collection/BommerLogLine';
import { StyledRow, StyledCell } from '../styles/TableElements';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchLogLinesFromBackend } from '../../logLineSlice';

const TableBody = styled.div`
    flex: 1;
    overflow-y: scroll;
`;

export default function BommerLogTable(){

    const logLines = useAppSelector((state) => state.logLinesStateSlice.logLines);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLogLinesFromBackend())
    }, []);

    const renderedLogLines = logLines.map(line => {
        return (
            <BommerLogLine {...line} />
        )
    });

    return (
        <>
            <StyledRow>
                <StyledCell><span>Line</span> <span>+</span></StyledCell>
                <StyledCell>Severity</StyledCell>
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