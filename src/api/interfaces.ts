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
      '@lastUpdated': Date
      name: string
    } & T
  > {}

export interface AssetListSongResponse
  extends AssetListResponse<{
    album: {
      '@assetType': AssetType
      '@key': string
      '@lastTouchBy': string
      '@lastTx': string
      '@lastUpdated': Date
      artist: {
        '@assetType': string
        '@key': string
        '@lastTouchBy': string
        '@lastTx': string
        '@lastUpdated': Date
        country: string
        name: string
      }
      name: string
      year: number
    }
  }> {}

export interface AssetListArtistResponse
  extends AssetListResponse<{
    country: string
  }> {}

export interface AssetListAlbumResponse
  extends AssetListResponse<{
    year: number
    artist: {
      '@assetType': AssetType
      '@key': string
      '@lastTouchBy': string
      '@lastTx': string
      '@lastUpdated': Date
      country: string
      name: string
    }
  }> {}

export interface AssetListPlaylistResponse
  extends AssetListResponse<{
    private: boolean
    songs: AssetListSongResponse['result'] | []
  }> {}

export interface AssetCreatePayload {
  assetType: string
  name: string
  year?: number
  songs?: Record<string, string>[] | []
  country?: string
  artist?: Record<string, string>
  isPrivate?: boolean
  album?: Record<string, string>
}
