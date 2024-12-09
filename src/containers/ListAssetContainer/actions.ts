import type { AssetType } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { searchAsseRequest } from '../../api/routes/searchAsset'
export const searchAsset = createAppAsyncThunk(
  'list/searchAsset',
  async ({
    assetType,
    assetName,
    limit,
  }: { assetType: AssetType; assetName?: string; limit?: number }) => {
    const result = await searchAsseRequest({
      assetType,
      assetName,
      limit,
    })
    return { result, assetType, assetName, limit }
  }
)


