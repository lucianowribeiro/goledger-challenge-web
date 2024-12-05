import { useDispatch } from 'react-redux'
import type { AssetType } from '../../http/infra/api/interfaces'
import { toggleAssetType } from './toogleSlice'
import { useSelectors } from '../../app/hooks'

export const useTypeToogle = () => {
  const dispatch = useDispatch()

  const handleClicktAssetTypeToogle = (assetType: AssetType) => {
    dispatch(toggleAssetType(assetType))
  }

  const { assetType } = useSelectors(state => state.toggle)

  return {
    handleClicktAssetTypeToogle,
    assetType,
  }
}
