import { createSlice } from '@reduxjs/toolkit'
import type { UpdateAssetAction, UpdateState } from './interfaces'
import { updateAsset } from './actions'

const initialState: UpdateState = {
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
      .addCase(updateAsset.fulfilled, (state, action: UpdateAssetAction) => {
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
