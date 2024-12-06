import { createSlice } from '@reduxjs/toolkit'
import type { ToggleActions, ToggleState } from './interfaces'

const initialState: ToggleState = {
  assetType: 'song',
}

const toogleSlice = createSlice({
  name: 'toogle',
  initialState,
  reducers: {
    toggleAssetType: (state, action: ToggleActions) => {
      state.assetType = action.payload
    },
  },
})

export const { toggleAssetType } = toogleSlice.actions
export default toogleSlice.reducer
