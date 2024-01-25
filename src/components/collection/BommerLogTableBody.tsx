import React from 'react';
import BommerLogLine from "../collection/BommerLogLine";
import {fakeProps1, fakeProps2, fakeProps3, fakeProps4, fakeProps5, fakeProps6, fakeProps7} from '../fakeLogLines';

export default function BommerLogTable(){
    return (
        <tbody>
            <BommerLogLine {...fakeProps1} />
            <BommerLogLine {...fakeProps2} />
            <BommerLogLine {...fakeProps3} />
            <BommerLogLine {...fakeProps4} />
            <BommerLogLine {...fakeProps5} />
            <BommerLogLine {...fakeProps6} />
            <BommerLogLine {...fakeProps7} />
        </tbody>
    )
}