import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { loadLogLinesFromBackend } from './mockBackend'
import type { BommerLogLineProps } from './components/collection/BommerLogLine'

interface LogLinesState {
    loaded: boolean,
    logLines: BommerLogLineProps[],
}


const initialState:LogLinesState = {
    loaded: false,
    logLines:[],
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
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchLogLinesFromBackend.fulfilled, (state, action:PayloadAction<BommerLogLineProps[]>) => {
            state.logLines = action.payload
        })
    },
})
export default logLineSlice.reducer