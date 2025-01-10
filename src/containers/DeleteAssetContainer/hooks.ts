import { useCallback } from 'react'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import { selectAssetName } from '../SelectedAssetContainer/selectors'

import { deleteAsset } from './actions'
import { selectSearchAsset } from '../ListAssetContainer/selectors'

export const useDeleteAsset = () => {
  const dispatch = useAppDispatch()
  const assetName = useSelectors(selectAssetName)
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
