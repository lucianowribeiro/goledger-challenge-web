import type { RootState } from '../../app/store'

export const selectAllAssetsByType = (state: RootState) =>
  state.list.assets[state.toggle.assetType] &&
  state.list.assets[state.toggle.assetType]
export const selectLoading = (state: RootState) =>
  state.list.status === 'pending'

export const selectEmpty = (state: RootState) => state.list.status === 'idle'

export const selectError = (state: RootState) => state.list.error
