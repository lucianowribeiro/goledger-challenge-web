import { createSlice } from '@reduxjs/toolkit'
import type { CreateAssetAction, CreateState } from './interfaces'
import { updateAsset } from './actions'

const initialState: CreateState = {
  payload: null,
  status: 'idle',
  error: null,
  ids: [],
}

const updateAssetSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateAsset.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(updateAsset.fulfilled, (state, action: CreateAssetAction) => {
        state.status = 'succeeded'
        state.payload = action.payload
      })
      .addCase(updateAsset.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})
export default updateAssetSlice.reducer
