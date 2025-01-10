import type { AssetCreatePayload, AssetDeletePayload } from '../interfaces'
import { client } from '../client'

export async function deleteAsseRequest(payload: AssetDeletePayload) {
  const data = await client.DELETE({
    payload: {
      key: {
        ...payload,
      },
      cascade: false,
    },
    url: 'invoke/deleteAsset',
  })
  return data.result
}
