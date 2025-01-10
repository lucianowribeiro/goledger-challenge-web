import type { AssetUpdatePayload } from '../interfaces'
import { client } from '../client'

export async function updateAsseRequest(payload: AssetUpdatePayload) {
  const data = await client.PUT({
    payload: {
      update: {
        ...payload,
      },
    },
    url: 'invoke/updateAsset',
  })
  return data.result
}
