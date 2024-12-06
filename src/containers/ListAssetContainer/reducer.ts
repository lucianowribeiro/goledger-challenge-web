import { createSlice } from '@reduxjs/toolkit'
import type { ListActions, ListState } from './interfaces'
import { listAssetByType } from './actions'

const initialState: ListState = {
  assets: [],
  assetId: null,
  status: 'idle',
  error: null,
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(listAssetByType.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(listAssetByType.fulfilled, (state, action: ListActions) => {
        state.status = 'succeeded'

        state.assets = {
          ...state.assets,
          [action.payload.assetType]: action.payload.result,
        }
        if (!action.payload.assetId) return

        state.assetId = action.payload.assetId
      })
      .addCase(listAssetByType.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})

export default listSlice.reducer
