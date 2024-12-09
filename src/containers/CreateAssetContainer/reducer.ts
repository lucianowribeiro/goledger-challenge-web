import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CreateAssetAction, CreateState, FindIdAction } from './interface'
import { createAsset, findAsset } from './actions'
import type { AssetCreatePayload } from '../../api/interfaces'

const initialState: CreateState = {
  payload: null,
  status: 'idle',
  error: null,
  ids: [],
}

const createAssetSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createAsset.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(createAsset.fulfilled, (state, action: CreateAssetAction) => {
        state.status = 'succeeded'
        state.payload = action.payload
      })
      .addCase(createAsset.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      .addCase(findAsset.pending, state => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(findAsset.fulfilled, (state, action: FindIdAction) => {
        state.status = 'succeeded'

        if (!action.payload.result) return
        state.ids = [
          ...state.ids,
          action.payload.result[0]['@key'].split(':')[1],
        ]
      })
      .addCase(findAsset.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  },
})
export const { resetState } = createAssetSlice.actions
export default createAssetSlice.reducer
