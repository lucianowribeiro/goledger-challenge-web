import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  AssetListAlbumResponse,
  AssetListArtistResponse,
  AssetListPlaylistResponse,
  AssetListSongResponse,
  AssetType,
} from '../../http/infra/api/interfaces'

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
  }
  assetId: string | null
}

export interface ListActions
  extends PayloadAction<{
    result: AssetListVariants
    assetType: AssetType
    assetId?: string
  }> {}
