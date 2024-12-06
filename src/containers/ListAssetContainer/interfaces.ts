import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AssetListAlbumResponse,
  AssetListArtistResponse,
  AssetListPlaylistResponse,
  AssetListSongResponse,
  AssetType,
} from '../../api/interfaces'

export type AssetListVariants =
  | AssetListSongResponse['result']
  | AssetListArtistResponse['result']
  | AssetListAlbumResponse['result']
  | AssetListPlaylistResponse['result']

export interface ListState {
  assets: {
    song: AssetListSongResponse[]
    artist: AssetListArtistResponse[]
    album: AssetListAlbumResponse[]
    playlist: AssetListPlaylistResponse[]
  } | []
  assetId: string | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

export interface ListActions
  extends PayloadAction<{
    result: AssetListVariants
    assetType: AssetType
    assetId?: string
  }> {}
