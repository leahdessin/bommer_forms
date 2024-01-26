import React, {useEffect} from 'react';
import BommerLogLine from "../collection/BommerLogLine";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchLogLinesFromBackend } from "../../logLineSlice";



export default function BommerLogTable(){
    const logLines = useAppSelector((state) => state.logLinesStateSlice.logLines)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLogLinesFromBackend())
    }, [])

    const renderedLogLines = logLines.map(line => {
        return (
            <BommerLogLine {...line} />
        )
    })

    return (
        <tbody>
            {renderedLogLines}
        </tbody>
    )
}