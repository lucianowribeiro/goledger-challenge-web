import { createSlice } from '@reduxjs/toolkit'
import type { SelectActions, SelectState } from './interfaces'

const initialState: SelectState = {
  assetType: 'song',
  assetName: '',
}

const toogleSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectAsset: (state, { payload }: SelectActions) => {
      const { assetType, assetName } = payload

      state.assetType = assetType || state.assetType
      state.assetName = assetName || state.assetName
    },
  },
})

export const { selectAsset } = toogleSlice.actions
export default toogleSlice.reducer
