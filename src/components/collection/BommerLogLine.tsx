import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleDown } from '@fortawesome/free-solid-svg-icons'

const StyledLogLine = styled.tr`
    font-family: 'Consolas', serif;
    padding: 3px;
    border-top: 3px solid #111;
`;

const LogField = styled.td`
    overflow-wrap: break-word;
    background-color: #333;

    ${StyledLogLine}:hover & {
        background-color: #666;
    }

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`;

const StyledSpan = styled.span<{ $severityColor?: string; }>`
    border: 2px solid ${props => props.$severityColor};
    padding: 5px;
    font-weight: bold;
    display: inline-block;
    width: 53px;
    color: ${props => props.$severityColor};
    background-color: #333;
    border-radius: 10px;
    text-transform: capitalize;
    text-align: center;
`;


export interface BommerLogLineProps {
    lineNumber: number,
    severity: string,
    timestamp: string,
    methodOrigin: string,
    threadOrigin: string,
    logDetail: string,
}

const severityLookup:{[key:string]: string} = {
    'INFO': '#3dff64',
    'DEBUG': '#009afa',
    'TRACE': '#fff',
    'WARN': '#ffdd00',
    'ERROR': '#ff5900',
    'FATAL': '#ff6161',
    'NOTICE': '#969696',
}
function BommerLogLine(props: BommerLogLineProps) {

    const [isExpanded, setExpanded] = useState(false);

    return (
        <StyledLogLine onClick={() => {setExpanded(!isExpanded)}}>
            <LogField>
                <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleRight } />
            </LogField>
            <LogField>{props.lineNumber}</LogField>
            <LogField>
                <StyledSpan $severityColor={severityLookup[props.severity]}>
                    {props.severity}
                </StyledSpan>
            </LogField>
            <LogField>{props.timestamp}</LogField>
            <LogField>{props.methodOrigin}</LogField>
            <LogField>{props.threadOrigin}</LogField>
            <LogField>{props.logDetail}</LogField>
        </StyledLogLine>
    );
}

export default BommerLogLine;