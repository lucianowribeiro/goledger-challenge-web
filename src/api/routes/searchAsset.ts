import type { AssetType } from '../interfaces'
import { client } from '../client'

export async function searchAsseRequest({
  assetType,
  limit,
  assetName,
}: { assetType: AssetType; limit?: number; assetName?: string }) {
  const data = await client.POST({
    payload: {
      query: {
        selector: {
          '@assetType': assetType,
          name: assetName,
        },
        limit,
      },
      resolve: true,
    },
    url: 'query/search',
  })
  return data.result
}
