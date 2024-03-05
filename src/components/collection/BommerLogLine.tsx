import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledRow, StyledCell} from '../styles/TableElements';
import {useAppSelector} from '../../hooks';

const StyledLogLine = styled(StyledRow)`
    font-family: 'Consolas', serif;
    border-top: 1px solid #555;
    
    &:hover {
        background-color: #444;
    }
`;

const LogField = styled(StyledCell)`
    overflow-wrap: break-word;
    max-width: 700px;
    height: 100%;
`;

const StyledSpan = styled.span<{ $severityColor?: string; }>`
    border: 2px solid ${props => props.$severityColor};
    padding: 5px;
    font-weight: bold;
    display: inline-block;
    width: 53px;
    color: ${props => props.$severityColor};
    background-color: #111;
    border-radius: 10px;
    text-transform: capitalize;
    text-align: center;
`;

const LogDetailSpan = styled.span<{ $showFullLog?: boolean; }>`
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: ${props => props.$showFullLog ? 'normal' : 'nowrap'};
    overflow: ${props => props.$showFullLog ? 'unset' : 'hidden'};
`;

const HighlightedSearchText = styled.span`
    font-weight: 600;
    color: black;
    background-color: white;
`;


export interface BommerLogLineProps {
    lineNumber: number,
    severity: string,
    timestamp: string,
    methodOrigin: string,
    threadOrigin: string,
    logDetail: string,
    show: boolean,
    highlight: boolean,
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

interface TextWithHighlightingProps {
    text:string,
    substring:string,
    isLogLineExpanded: boolean,
}
function TextWithHighlighting(props:TextWithHighlightingProps) {
    const normalizedText = props.text.normalize();
    const normalizedSubstring = props.substring.normalize();
    const inx = normalizedText.indexOf(normalizedSubstring);
    if (inx < 0) {
        return (<LogDetailSpan>{props.text}</LogDetailSpan>)
    }
    const before = props.text.substring(0, inx);
    const during = props.text.substring(inx, inx + props.substring.length);
    const after = props.text.substring(inx + props.substring.length);

    return (
        <LogDetailSpan $showFullLog={props.isLogLineExpanded}>
            {before}
            <HighlightedSearchText>{during}</HighlightedSearchText>
            {after}
        </LogDetailSpan>
    )
}

function BommerLogLine(props: BommerLogLineProps) {
    const searchTerm = useAppSelector((state) => state.logLinesStateSlice.searchTerm);
    const [isExpanded, setExpanded] = useState(false);

    return (
        <StyledLogLine onClick={() => {setExpanded(!isExpanded)}}>
            <LogField>{props.lineNumber}</LogField>
            <LogField>
                <StyledSpan $severityColor={severityLookup[props.severity]}>
                    {props.severity}
                </StyledSpan>
            </LogField>
            <LogField>{props.timestamp}</LogField>
            <LogField>{props.methodOrigin}</LogField>
            <LogField>{props.threadOrigin}</LogField>
            <LogField>
                <TextWithHighlighting isLogLineExpanded={isExpanded} text={props.logDetail} substring={searchTerm} />
            </LogField>
        </StyledLogLine>
    );
}

export default BommerLogLine;