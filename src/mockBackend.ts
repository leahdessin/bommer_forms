import type {BommerLogLineProps} from './components/collection/BommerLogLine'
import logs from './components/logmsgs.json'

export const fakeProps1: BommerLogLineProps = {
    lineNumber: 10,
    severity: 'INFO',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'bommer_app.net.impl.WebSocketTransport',
    threadOrigin: '30242235',
    logDetail: 'sending response: 243 string characters',
}
export const fakeProps2: BommerLogLineProps = {
    lineNumber: 133,
    severity: 'ERROR',
    timestamp: '2024-01-19 09:17:36.972342',
    methodOrigin: 'bommer_internal_main',
    threadOrigin: 'MainThread',
    logDetail: 'BuiltinProperties in common is not the same as legacy',
}
export const fakeProps3: BommerLogLineProps = {
    lineNumber: 143,
    severity: 'NOTICE',
    timestamp: '2024-01-19 09:17:41.334316',
    methodOrigin: 'actions.bommer_sessions',
    threadOrigin: 'Thread-4',
    logDetail: 'unable to load identity from {} , using stored data',
}
export const fakeProps4: BommerLogLineProps = {
    lineNumber: 889,
    severity: 'WARN',
    timestamp: '2024-01-19 09:17:41.338068',
    methodOrigin: 'analytics',
    threadOrigin: '',
    logDetail: 'Sending exception file /var/folders/70/brzz_8_538543h3__xfc99080000gn/T/exceptions-2024-01-19T091741.335001b9rti34y.log to server.',
}
export const fakeProps5: BommerLogLineProps = {
    lineNumber: 2711,
    severity: 'DEBUG',
    timestamp: '2024-01-22 07:09:23.747071',
    methodOrigin: 'actions.command_terminated',
    threadOrigin: 'MainThread',
    logDetail: 'in StepMachineOnCommandTerminated, cmd: CommitCommand',
}
export const fakeProps6: BommerLogLineProps = {
    lineNumber: 143,
    severity: 'FATAL',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'method here',
    threadOrigin: 'thread here',
    logDetail: 'BROKEN',
}
export const fakeProps7: BommerLogLineProps = {
    lineNumber: 143,
    severity: 'TRACE',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'method here',
    threadOrigin: 'thread here',
    logDetail: 'huge stack trace text here',
}

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