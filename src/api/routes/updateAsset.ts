import type { AssetCreatePayload } from '../interfaces'
import { client } from '../client'

export async function updateAsseRequest(payload: AssetCreatePayload) {
  const data = await client.PUT({
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
    url: 'invoke/updateAsset',
  })
  return data.result
}
