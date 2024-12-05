import type { PayloadAction } from '@reduxjs/toolkit'
import type { AssetType } from '../../http/infra/api/interfaces'

export interface ToggleState {
  assetType: AssetType
}

export interface ToggleActions extends PayloadAction<AssetType> {}
