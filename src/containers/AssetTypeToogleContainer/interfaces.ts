import type { PayloadAction } from '@reduxjs/toolkit'
import type { AssetType } from '../../api/interfaces'

export interface ToggleState {
  assetType: AssetType
}

export interface ToggleActions extends PayloadAction<AssetType> {}
