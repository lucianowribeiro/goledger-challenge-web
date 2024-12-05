import { token } from '../infra/api'
import type { MediaResponse } from '../../components/ListMediaTable'

export async function getMediaByType({ mediaType }: { mediaType: string }) {
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
            '@assetType': mediaType || 'song',
          },
        },
      }),
    }
  )

  const data: MediaResponse = await response.json()

  if (data.error) console.error(data)
  return data
}
