import { useCallback } from 'react'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import {
  selectAssetName,
  selectAssetType,
} from '../SelectedAssetContainer/selectors'
import { updateAsset } from './actions'
import { selectSearchAsset } from '../ListAssetContainer/selectors'

export const useUpdateAsset = () => {
  const dispatch = useAppDispatch()
  const assetName = useSelectors(selectAssetName)
  const assets = useSelectors(selectSearchAsset)

  const handleUpdateAsset = useCallback(() => {
    dispatch(
      updateAsset({
        ...assets?.filter(asset => asset.name === assetName)[0],
      })
    )
  }, [assetName, dispatch, assets])

  return {
    assetName,
    handleUpdateAsset,
  }
}
