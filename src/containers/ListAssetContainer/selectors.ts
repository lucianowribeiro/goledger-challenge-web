import type { RootState } from '../../redux/store'

export const selectAllAssetsByType = (state: RootState) =>
  state.list.assets[state.select.assetType] &&
  state.list.assets[state.select.assetType]
export const selectLoading = (state: RootState) =>
  state.list.status === 'pending'

export const selectEmpty = (state: RootState) => state.list.status === 'idle'

export const selectError = (state: RootState) => state.list.error
