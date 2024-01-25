import {BommerLogLineState} from "./collection/BommerLogLine";

export const fakeProps1: BommerLogLineState = {
    lineNumber: 10,
    severity: 'INFO',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'bommer_app.net.impl.WebSocketTransport',
    threadOrigin: '30242235',
    logDetail: 'sending response: 243 string characters',
}
export const fakeProps2: BommerLogLineState = {
    lineNumber: 133,
    severity: 'ERROR',
    timestamp: '2024-01-19 09:17:36.972342',
    methodOrigin: 'bommer_internal_main',
    threadOrigin: 'MainThread',
    logDetail: 'BuiltinProperties in common is not the same as legacy',
}
export const fakeProps3: BommerLogLineState = {
    lineNumber: 143,
    severity: 'NOTICE',
    timestamp: '2024-01-19 09:17:41.334316',
    methodOrigin: 'actions.bommer_sessions',
    threadOrigin: 'Thread-4',
    logDetail: 'unable to load identity from {} , using stored data',
}
export const fakeProps4: BommerLogLineState = {
    lineNumber: 889,
    severity: 'WARN',
    timestamp: '2024-01-19 09:17:41.338068',
    methodOrigin: 'analytics',
    threadOrigin: '',
    logDetail: 'Sending exception file /var/folders/70/brzz_8_538543h3__xfc99080000gn/T/exceptions-2024-01-19T091741.335001b9rti34y.log to server.',
}
export const fakeProps5: BommerLogLineState = {
    lineNumber: 2711,
    severity: 'DEBUG',
    timestamp: '2024-01-22 07:09:23.747071',
    methodOrigin: 'actions.command_terminated',
    threadOrigin: 'MainThread',
    logDetail: 'in StepMachineOnCommandTerminated, cmd: CommitCommand',
}
export const fakeProps6: BommerLogLineState = {
    lineNumber: 143,
    severity: 'FATAL',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'method here',
    threadOrigin: 'thread here',
    logDetail: 'BROKEN',
}
export const fakeProps7: BommerLogLineState = {
    lineNumber: 143,
    severity: 'TRACE',
    timestamp: '2022-05-27 18:32:17.118275',
    methodOrigin: 'method here',
    threadOrigin: 'thread here',
    logDetail: 'huge stack trace text here',
}