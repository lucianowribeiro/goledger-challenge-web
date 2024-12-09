import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AssetCreatePayload,
  AssetDeletePayload,
  AssetListAlbumResponse,
  AssetListArtistResponse,
  AssetListPlaylistResponse,
  AssetListSongResponse,
  AssetType,
} from '../../api/interfaces'
import { assetTypesMapping } from '../../components/SearchBar'
import type { AssetListVariants } from '../ListAssetContainer/interfaces'

export interface CreateState {
  payload: AssetCreatePayload | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  ids: string[] | []
}

export interface CreateAssetAction extends PayloadAction<AssetDeletePayload> {}
