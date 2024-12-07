import type { AssetType } from '../../api/interfaces'

import { useAppDispatch, useSelectors } from '../../redux/hooks'
import { selectAssetName, selectAssetType } from './selectors'
import { selectAsset } from './reducer'

export const useSelectAsset = () => {
  const dispatch = useAppDispatch()

  const assetTypeSelected = useSelectors(selectAssetType)
  const assetNameSelected = useSelectors(selectAssetName)

  const handleClickSelectAsset = ({
    assetName,
    assetType,
  }: {
    assetName?: string
    assetType?: AssetType
  }) => {
    dispatch(
      selectAsset({
        assetName,
        assetType,
      })
    )
  }

  return {
    handleClickSelectAsset,
    assetType: assetTypeSelected,
    assetName: assetNameSelected,
  }
}
