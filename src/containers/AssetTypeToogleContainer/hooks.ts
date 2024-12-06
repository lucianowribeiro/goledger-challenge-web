import { useDispatch } from 'react-redux'
import type { AssetType } from '../../api/interfaces'
import { toggleAssetType } from './reducer'
import { selectAssetType } from './selectors'
import { useSelectors } from '../../app/hooks'

export const useTypeToogle = () => {
  const dispatch = useDispatch()

  const { assetType } = useSelectors(selectAssetType)

  const handleClicktAssetTypeToogle = (assetType: AssetType) => {
    dispatch(toggleAssetType(assetType))
  }

  return {
    handleClicktAssetTypeToogle,
    assetType,
  }
}
