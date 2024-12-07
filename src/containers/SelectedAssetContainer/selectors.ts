import type { RootState } from '../../redux/store'

export const selectAssetType = (state: RootState) => state.select.assetType

export const selectAssetName = (state: RootState) => state.select.assetName
