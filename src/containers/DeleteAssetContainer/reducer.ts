import { createSlice } from '@reduxjs/toolkit'
import type { DeleteAssetAction, DeleteState } from './interfaces'
import { deleteAsset } from './actions'

const initialState: DeleteState = {
  payload: null,
  status: 'idle',
  error: null,
  ids: [],
}

const deleteAssetSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteAsset.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(deleteAsset.fulfilled, (state, action: DeleteAssetAction) => {
        state.status = 'succeeded'
        state.payload = action.payload
      })
      .addCase(deleteAsset.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})
export default deleteAssetSlice.reducer
