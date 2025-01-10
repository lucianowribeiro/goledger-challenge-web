import type { PayloadAction } from '@reduxjs/toolkit'
import type { AssetDeletePayload } from '../../api/interfaces'

export interface DeleteState {
  payload: AssetDeletePayload | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  ids: string[] | []
}

export interface DeleteAssetAction extends PayloadAction<AssetDeletePayload> {}
