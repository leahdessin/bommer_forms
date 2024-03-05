import { FilterableColumnProps } from './types';

export const filterableColumnsList:FilterableColumnProps[] = [
    {
        name: 'severity',
        displayName: 'Severity',
        isCurrentlyFiltered: false,
        filterOptions: [
            {
                name: 'info',
                displayName: 'INFO',
                filterActive: false
            },
            {
                name: 'warn',
                displayName: 'WARN',
                filterActive: false
            },
            {
                name: 'trace',
                displayName: 'TRACE',
                filterActive: false
            },
            {
                name: 'notice',
                displayName: 'NOTICE',
                filterActive: false
            },
            {
                name: 'error',
                displayName: 'ERROR',
                filterActive: false
            },
            {
                name: 'debug',
                displayName: 'DEBUG',
                filterActive: false
            },
            {
                name: 'fatal',
                displayName: 'FATAL',
                filterActive: false
            },
        ],
    }
]