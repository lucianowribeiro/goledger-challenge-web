import { useCallback } from 'react'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import {
  selectAssetName,
  selectAssetType,
} from '../SelectedAssetContainer/selectors'
import { updateAsset } from './actions'

export const useUpdateAsset = () => {
  const dispatch = useAppDispatch()
  const assetName = useSelectors(selectAssetName)
  const assetType = useSelectors(selectAssetType)

  const handleUpdateAsset = useCallback(() => {
    dispatch(
      updateAsset({
        assetType,
        name: assetName,
      })
    )
  }, [assetName, assetType, dispatch])

  return {
    assetName,
    handleUpdateAsset,
  }
}
