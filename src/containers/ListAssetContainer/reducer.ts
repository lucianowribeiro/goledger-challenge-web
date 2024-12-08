import { createSlice } from '@reduxjs/toolkit'
import type { ListActions, ListState } from './interfaces'
import { searchAsset } from './actions'

const initialState: ListState = {
  assets: {},
  assetName: null,
  assetType: null,
  limit: null,
  status: 'idle',
  error: null,
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchAsset.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(
        searchAsset.fulfilled,
        (
          state,
          { payload: { result, assetType, assetName, limit } }: ListActions
        ) => {
          state.status = 'succeeded'

          state.assets = {
            ...state.assets,
            [assetType]: result,
          }

          state.assetType = assetType

          state.assetName = !assetName ? null : assetName

          console.log(state.assetName)
          if (!limit) return

          state.limit = limit
        }
      )
      .addCase(searchAsset.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})

export default listSlice.reducer
