import type { RootState } from '../../redux/store'

export const selectSearchAsset = (state: RootState) =>
  state.list.assets[state.select.assetType] &&
  state.list.assets[state.select.assetType]
export const selectLoading = (state: RootState) =>
  state.list.status === 'idle' || state.list.status === 'pending'

export const selectError = (state: RootState) => state.list.error

export const selectAssetName = (state: RootState) => state.list.assetName
export const selectListAssetLimit = (state: RootState) => state.list.limit

export const selectSearchAssets = (state: RootState) =>
  state.list.assets && state.list.assets
