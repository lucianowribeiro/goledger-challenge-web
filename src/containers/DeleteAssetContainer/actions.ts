import type { AssetCreatePayload, AssetType } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { searchAsseRequest } from '../../api/routes/searchAsset'
import { createAsseRequest } from '../../api/routes/createAsset'
import { deleteAsseRequest } from '../../api/routes/deleteAsset'

export const deleteAssetAction = createAppAsyncThunk(
  'delete/deleteAsset',
  async ({ assetType, name }: AssetCreatePayload) => {
    await deleteAsseRequest({
      assetType,
      name,
    })
    return {
      assetType,
      name,
    }
  }
)
