import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { loadLogLinesFromBackend } from './mockBackend'
import type { BommerLogLineProps } from './components/collection/BommerLogLine'



interface FilterableColumnState {
    columnName: string,
    currentlyFilteredOptions: string[]
}

const initialFilterableColumns:FilterableColumnState[] = [
    {
        columnName: 'severity',
        currentlyFilteredOptions: []
    }
]

interface LogLinesState {
    searchTerm: string,
    loaded: boolean,
    logLines: BommerLogLineProps[],
    filterColumns: FilterableColumnState[]
}

const initialState:LogLinesState = {
    searchTerm: '',
    loaded: false,
    logLines:[],
    filterColumns: initialFilterableColumns
};

export const fetchLogLinesFromBackend = createAsyncThunk(
    'form-data-slice/fetchLogLinesFromBackend',
    async (thunkAPI) => {
        return await loadLogLinesFromBackend()
    }
)


export const logLineSlice = createSlice({
    name: 'log-line-slice',
    initialState,
    reducers: {
        searchLogLines:(state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
            // TODO: ask jesse about this
            if(!state.searchTerm) {
                console.log('empty: ' + action.payload);
            }
            const visibleLines = state.logLines.filter(line => line.show);
            for (const item of visibleLines) {
                item.show = item.logDetail.includes(action.payload);
            }
        },
        filterByColumn:(state, action: PayloadAction<string[]>) => {
            const columnName = action.payload[0];
            const optionName = action.payload[1];

            const filterableColumn = state.filterColumns.find((column) => {
               return column.columnName === columnName;
            });
            if (filterableColumn){
                // if not currently filtering on that option, filter on it
                if (!filterableColumn.currentlyFilteredOptions.includes(optionName)){
                    filterableColumn.currentlyFilteredOptions.push(optionName);
                }
                // if not currently filtering on that option, filter on it
                else {
                    filterableColumn.currentlyFilteredOptions = filterableColumn.currentlyFilteredOptions.filter(option => option.toLowerCase() !== optionName);
                }
                const visibleLines = state.logLines.filter(line => line.show);
                for (const line of visibleLines) {
                    const columnValue = Reflect.get(line, columnName).toLowerCase();
                    line.show = filterableColumn.currentlyFilteredOptions.includes(columnValue);
                }
            }
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchLogLinesFromBackend.fulfilled, (state, action:PayloadAction<BommerLogLineProps[]>) => {
            state.logLines = action.payload
        })
    },
})

export const { searchLogLines, filterByColumn } = logLineSlice.actions
export default logLineSlice.reducer
