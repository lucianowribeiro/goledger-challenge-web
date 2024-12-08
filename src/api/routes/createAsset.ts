import type { AssetType } from '../interfaces'
import { client } from '../client'

export async function createAsseRequest({
  assetType,
  assetName,
}: { assetType: AssetType; assetName?: string }) {
  const data = await client.POST({
    payload: {
      asset: {
        '@assetType': assetType,
        name: assetName,
      },
    },
    url: 'invoke/createAsset',
  })
  return data.result
}
