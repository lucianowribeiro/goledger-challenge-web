import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CreateAssetAction, CreateState, FindIdAction } from './interface'
import { createAsset, findAsset } from './actions'
import type { AssetCreatePayload } from '../../api/interfaces'
import { deleteAsset } from './actions'
import { deleteAssetAction } from './actions'

const initialState: CreateState = {
  payload: null,
  status: 'idle',
  error: null,
  ids: [],
}

const deleteAssetAsset = createSlice({
  name: 'delete',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteAssetAction.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(
        deleteAssetAction.fulfilled,
        (state, action: CreateAssetAction) => {
          state.status = 'succeeded'
          state.payload = action.payload
        }
      )
      .addCase(deleteAssetAction.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})
export default deleteAssetAsset.reducer
