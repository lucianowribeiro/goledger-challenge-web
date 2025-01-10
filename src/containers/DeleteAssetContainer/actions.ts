import type { AssetCreatePayload, AssetDeletePayload } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { deleteAsseRequest } from '../../api/routes/deleteAsset'

export const deleteAsset = createAppAsyncThunk(
  'delete/deleteAsset',
  async ({ ...payload }: AssetDeletePayload) => {
    await deleteAsseRequest({
      ...payload,
    })
    return {
      ...payload,
    }
  }
)
