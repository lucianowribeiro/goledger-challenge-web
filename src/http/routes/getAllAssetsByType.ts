import type { AssetListVariants } from '../../features/list/interfaces'
import { token } from '../infra/api/env'
import type { AssetType } from '../infra/api/interfaces'

export async function getAllssetByType({
  assetType,
}: { assetType: AssetType }) {
  try {
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
  } catch (error) {
    console.log(error)
  }
}
