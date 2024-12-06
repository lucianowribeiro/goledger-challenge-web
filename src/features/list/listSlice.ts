import { createSlice } from '@reduxjs/toolkit'
import type { AssetListVariants, ListActions, ListState } from './interfaces'
import type { AssetType } from '../../http/infra/api/interfaces'

const initialState: ListState = {
  assets: {
    song: [],
    artist: [],
    album: [],
    playlist: [],
  },
  assetId: null,
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    listAssetByType: (state, action: ListActions) => {
      if (!action.payload || !action.payload.result) return

      state.assets = {
        ...state.assets,
        [action.payload.assetType]: action.payload.result,
      }

      if (action.payload.assetId === undefined) return

      state.assetId = action.payload.assetId
    },
  },
})

export const { listAssetByType } = listSlice.actions
export default listSlice.reducer
