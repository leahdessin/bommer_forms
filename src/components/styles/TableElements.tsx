import styled from "styled-components";

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const StyledCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    
    &:first-child {
        width: 45px;
    }
    &:nth-child(2) {
        width: 72px;
    }
    &:nth-child(3) {
        width: 150px;
    }
    &:nth-child(4) {
        width: 215px;
        word-break: break-all;
    }
    &:nth-child(5) {
        width: 100px;
    }
    &:nth-child(6) {
        flex: 1;
    }
`;