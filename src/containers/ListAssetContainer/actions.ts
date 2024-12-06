import { getAllAssetByType } from '../../api/routes/getAllAssetsByType'
import type { AssetType } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../app/withTypes'

export const listAssetByType = createAppAsyncThunk(
  'list/listAssetByType',
  async (assetType: AssetType) => {
    const result = await getAllAssetByType({ assetType })
    return { result, assetType }
  }
)
