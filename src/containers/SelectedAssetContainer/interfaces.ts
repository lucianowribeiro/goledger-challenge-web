import type { PayloadAction } from '@reduxjs/toolkit'
import type { AssetType } from '../../api/interfaces'

export interface SelectState {
  assetType: AssetType
  assetName: string
}

export interface SelectActions
  extends PayloadAction<{
    assetType?: AssetType
    assetName?: string
  }> {}
