import type { AssetListVariants } from '../../containers/ListAssetContainer/interfaces'
import { token } from '../../infra/env'
import type { AssetType } from '../../api/interfaces'

export async function getAllAssetByType({
  assetType,
}: { assetType: AssetType }) {
  const response = await fetch(
    'http://ec2-54-91-215-149.compute-1.amazonaws.com/api/query/search',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token()}`,
      },
      method: 'POST',
      body: JSON.stringify({
        query: {
          selector: {
            '@assetType': assetType,
          },
        },
      }),
    }
  )

  const data = await response.json()
  return data.result
}
