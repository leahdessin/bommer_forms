import React from 'react';
import styled from 'styled-components';

const StyledThead = styled.thead`
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const StyledTh = styled.th`
    padding-right: 14px;
    min-width: 20px;
    vertical-align: bottom;
    text-align: left;
    cursor: pointer;
`;

export default function BommerLogTableHeader(){
    return (
        <StyledThead>
            <tr>
                <StyledTh></StyledTh>
                <StyledTh>Line</StyledTh>
                <StyledTh>Severity</StyledTh>
                <StyledTh>Timestamp</StyledTh>
                <StyledTh>Origin</StyledTh>
                <StyledTh>Thread</StyledTh>
                <StyledTh>Message</StyledTh>
            </tr>
        </StyledThead>
    )
}