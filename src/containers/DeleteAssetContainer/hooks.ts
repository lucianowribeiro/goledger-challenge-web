import { z } from 'zod'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAsset, findAsset } from './actions'
import { AssetType } from '../../api/interfaces'
import {
  selectSearchAsset,
  selectSearchAssets,
} from '../ListAssetContainer/selectors'
import { searchAsset } from '../ListAssetContainer/actions'
import { selectIds } from './selectors'
import { useCallback } from 'react'
import { resetState } from './reducer'
import {
  selectAssetName,
  selectAssetType,
} from '../SelectedAssetContainer/selectors'

export const useDeleteAsset = () => {
  const dispatch = useAppDispatch()
  const assetName = useSelectors(selectAssetName)
  const assetType = useSelectors(selectAssetType)

  const handleDeleteAsset = useCallback(() => {
    dispatch(
      deleteAssetAction({
        assetType,
        name: assetName,
      })
    )
  }, [assetName, assetType, dispatch])

  return {
    assetName,
    handleDeleteAsset,
  }
}
