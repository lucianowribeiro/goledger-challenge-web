import type { AssetUpdatePayload } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { updateAsseRequest } from '../../api/routes/updateAsset'

export const updateAsset = createAppAsyncThunk(
  'update/updateAsset',
  async ({ ...payload }: AssetUpdatePayload) => {
    await updateAsseRequest({
      ...payload,
    })
    
    return {
      ...payload,
    }
  }
)
