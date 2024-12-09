import type { AssetCreatePayload, AssetType } from '../interfaces'
import { client } from '../client'

export async function deleteAsseRequest(payload: AssetCreatePayload) {
  const data = await client.DELETE({
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
    url: 'invoke/ delete',
  })
  return data.result
}
