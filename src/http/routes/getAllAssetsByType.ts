import { token } from '../infra/api/env'
import type { AssetType } from '../infra/api/interfaces'

export async function getAssetByType({ assetType }: { assetType: AssetType }) {
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

  if (data.error) console.error(data)
  return data
}
