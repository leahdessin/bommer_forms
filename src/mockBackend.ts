import type {BommerLogLineProps} from './components/collection/BommerLogLine'
import logs from './components/logmsgs.json'

function readLog():BommerLogLineProps[] {
    let i = 1;
    let propsList:BommerLogLineProps[] = [];
    for (const logMessage of logs) {
        const newProps:BommerLogLineProps = {
            lineNumber: i,
            severity: logMessage.severity,
            timestamp: logMessage.timestamp,
            methodOrigin: logMessage.method_origin,
            threadOrigin: logMessage.thread_origin,
            logDetail: logMessage.message,
            show: true,
            highlight: false,
        }
        propsList.push(newProps);
        i++;
    }
    return propsList;
}

export function loadLogLinesFromBackend(): Promise<BommerLogLineProps[]> {
    return new Promise<any[]>((resolve, reject) => {
        resolve(readLog());
    });
}
