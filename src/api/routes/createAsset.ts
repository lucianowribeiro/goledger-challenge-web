import type { AssetCreatePayload, AssetType } from '../interfaces'
import { client } from '../client'

export async function createAsseRequest(payload: AssetCreatePayload) {
  const data = await client.POST({
    payload: {
      asset: [
        {
          '@assetType': payload.assetType,
          name: payload.name,
          year: payload.year,
          songs: payload.songs,
          country: payload.country,
          artist: payload.artist,
          isPrivate: payload.isPrivate,
          album: payload.album,
        },
      ],
    },
    url: 'invoke/createAsset',
  })
  return data.result
}
