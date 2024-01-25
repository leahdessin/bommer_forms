import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const StyledLogLine = styled.tr`
  font-family: 'Consolas', serif;
  font-weight: bold;
  background-color: rgb(0,87,155);
  padding: 3px;
  border-top: 3px solid rgb(0,20,36);
  
  &:hover {
    background-color: rgb(0,116,206);
  }
`;

const LogField = styled.td`
  overflow-wrap: break-word;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export interface BommerLogLineState {
    lineNumber: number,
    severity: string,
    timestamp: string,
    methodOrigin: string,
    threadOrigin: string,
    logDetail: string,
}
function BommerLogLine(props: BommerLogLineState) {

    return (
        <StyledLogLine>
            <LogField>
                <FontAwesomeIcon icon={faAngleRight} />
            </LogField>
            <LogField>{props.lineNumber}</LogField>
            <LogField>{props.severity}</LogField>
            <LogField>{props.timestamp}</LogField>
            <LogField>{props.methodOrigin}</LogField>
            <LogField>{props.threadOrigin}</LogField>
            <LogField>{props.logDetail}</LogField>
        </StyledLogLine>
    );
}

export default BommerLogLine;