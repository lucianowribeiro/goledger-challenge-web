import type { AssetCreatePayload, AssetType } from '../../api/interfaces'
import { createAppAsyncThunk } from '../../redux/withTypes'
import { searchAsseRequest } from '../../api/routes/searchAsset'
import { createAsseRequest } from '../../api/routes/createAsset'

export const createAsset = createAppAsyncThunk(
  'create/createAsset',
  async ({
    assetType,
    name,
    album,
    artist,
    country,
    isPrivate,
    songs,
    year,
  }: AssetCreatePayload) => {
    await createAsseRequest({
      assetType,
      name,
      album,
      artist,
      country,
      isPrivate,
      songs,
      year,
    })
    return {
      assetType,
      name,
      album,
      artist,
      country,
      isPrivate,
      songs,
      year,
    }
  }
)

export const findAsset = createAppAsyncThunk(
  'create/findAsset',
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
    return { result }
  }
)
