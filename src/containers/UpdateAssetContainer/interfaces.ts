import type { PayloadAction } from '@reduxjs/toolkit'
import type { AssetUpdatePayload } from '../../api/interfaces'
export interface UpdateState {
  payload: AssetUpdatePayload | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  ids: string[] | []
}

export interface UpdateAssetAction extends PayloadAction<AssetUpdatePayload> {}
