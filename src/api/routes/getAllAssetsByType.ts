import type { AssetListVariants } from '../../containers/ListAssetContainer/interfaces'
import { token } from '../../infra/env'
import type { AssetType } from '../../api/interfaces'
import { client } from '../client'

export async function getAllAssetByType({
  assetType,
}: { assetType: AssetType }) {
  const data = await client.POST({
    payload: {
      query: {
        selector: {
          '@assetType': assetType,
        },
      },
    },
    url: 'query/search',
  })
  return data.result
}
