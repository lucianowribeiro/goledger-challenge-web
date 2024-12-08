import { client } from '../client'

export async function getAllAssetByType({ name }: { name: string }) {
  const data = await client.POST({
    payload: {
      query: {
        selector: {
          '@assetType': name,
        },
      },
    },
    url: 'query/search',
  })
  return data.result
}
