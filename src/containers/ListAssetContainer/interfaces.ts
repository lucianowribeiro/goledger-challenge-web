import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AssetListAlbumResponse,
  AssetListArtistResponse,
  AssetListPlaylistResponse,
  AssetListSongResponse,
  AssetType,
} from '../../api/interfaces'
import { assetTypesMapping } from '../../components/common/SearchBar'

export type AssetListVariants =
  | AssetListSongResponse['result']
  | AssetListArtistResponse['result']
  | AssetListAlbumResponse['result']
  | AssetListPlaylistResponse['result']

export interface ListState {
  assets: {
    [Key in AssetType]?: AssetListVariants
  }
  assetName: string | null
  assetType: string | null
  limit: number | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

export interface ListActions
  extends PayloadAction<{
    assetType: AssetType
    limit?: number
    result: AssetListVariants
    assetName?: string
  }> {}
