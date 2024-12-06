import type { assetTypesMapping } from '../components/SearchBar'

export type AssetType = keyof typeof assetTypesMapping

export interface Response<T> {
  result: T[]
  metadata: null
}

export interface AssetListResponse<T>
  extends Response<
    {
      '@assetType': AssetType
      '@key': string
      '@lastTouchBy': string
      '@lastTx': string
      '@lastUpdated': string
      name: string
    } & T
  > {}

export interface AssetListSongResponse
  extends AssetListResponse<{
    album: {
      '@assetType': AssetType
      '@key': string
    }
  }> {}

export interface AssetListArtistResponse
  extends AssetListResponse<{
    contry: string
  }> {}

export interface AssetListAlbumResponse
  extends AssetListResponse<{
    year: number
    artist: {
      '@assetType': AssetType
      '@key': string
    }
  }> {}

export interface AssetListPlaylistResponse
  extends AssetListResponse<{
    songs: Record<string, string>[]
  }> {}
