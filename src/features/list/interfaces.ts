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
  assetList: Record<AssetType, AssetListVariants> | null
}

export interface ListActions
  extends PayloadAction<{
    result: Record<AssetType, AssetListVariants> | null
  }> {}

/*   {
    '@assetType': AssetType
    '@key': string
    '@lastTouchBy': string
    '@lastTx': string
    '@lastUpdated': string
    name: string
    album: {
      '@assetType': AssetType
      '@key': string
    }
  }[]
  assetType: AssetType */
