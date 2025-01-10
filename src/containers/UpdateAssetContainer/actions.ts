import type { AssetCreatePayload } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { updateAsseRequest } from '../../api/routes/updateAsset'

export const updateAsset = createAppAsyncThunk(
  'update/updateAsset',
  async ({ assetType, name }: AssetCreatePayload) => {
    await updateAsseRequest({
      assetType,
      name,
    })
    return {
      assetType,
      name,
    }
  }
)
