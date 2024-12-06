import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectAllAssetsByType } from './selectors'
import { selectAssetType } from '../AssetTypeToogleContainer/selectors'
import { listAssetByType } from './actions'
import { useAppDispatch } from '../../app/hooks'

export const useList = () => {
  const dispatch = useAppDispatch()

  const { assetType } = useSelector(selectAssetType)
  const { assets } = useSelector(selectAllAssetsByType)

  useEffect(() => {
    assetType && dispatch(listAssetByType(assetType))
  }, [assetType, dispatch])

  return {
    /* isLoading ,*/
    assets,
  }
}
