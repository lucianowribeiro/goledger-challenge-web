import { useCallback } from 'react'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import {
  selectAssetName,
  selectAssetType,
} from '../SelectedAssetContainer/selectors'

import { deleteAsset } from './actions'
import { selectSearchAsset } from '../ListAssetContainer/selectors'
import { searchAsset } from '../ListAssetContainer/actions'

export const useDeleteAsset = () => {
  const dispatch = useAppDispatch()
  const assetName = useSelectors(selectAssetName)
  const assetType = useSelectors(selectAssetType)
  const assets = useSelectors(selectSearchAsset)

  const handleDeleteAsset = useCallback(() => {
    dispatch(
      deleteAsset({
        ...assets?.filter(asset => asset.name === assetName)[0],
      })
    )
  }, [assetName, dispatch, assets])

  return {
    assetName,
    handleDeleteAsset,
  }
}
