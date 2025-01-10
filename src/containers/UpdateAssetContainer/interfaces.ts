import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AssetCreatePayload,
  AssetUpdatePayload,
} from '../../api/interfaces'
export interface CreateState {
  payload: AssetCreatePayload | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  ids: string[] | []
}

export interface CreateAssetAction extends PayloadAction<AssetUpdatePayload> {}
