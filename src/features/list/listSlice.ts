import { createSlice } from '@reduxjs/toolkit'
import type { ListActions, ListState } from './interfaces'

const initialState: ListState = {
  assetList: null,
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    listAssetByType: (state, action: ListActions) => {
      state.assetList = action.payload.result
    },
  },
})

export const { listAssetByType } = listSlice.actions
export default listSlice.reducer
