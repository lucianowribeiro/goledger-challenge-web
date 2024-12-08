import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import {
  selectAssetName,
  selectListAssetLimit,
  selectSearchAsset,
} from './selectors'
import { selectAssetType } from '../SelectedAssetContainer/selectors'
import { useAppDispatch } from '../../redux/hooks'
import { searchAsset } from './actions'

export const useList = () => {
  const dispatch = useAppDispatch()

  const assetType = useSelector(selectAssetType)
  const assets = useSelector(selectSearchAsset)
  const assetNameSelected = useSelector(selectAssetName)
  const limitSelected = useSelector(selectListAssetLimit)

  useEffect(() => {
    dispatch(
      searchAsset({
        assetType,
        assetName: assetNameSelected ?? undefined,
        limit: limitSelected ?? undefined,
      })
    )
  }, [assetType, dispatch, assetNameSelected, limitSelected])

  const handleSearchAssetByName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        searchAsset({
          assetName: e.target.value,
          limit: limitSelected ?? undefined,
          assetType,
        })
      )
    },
    [dispatch, assetType, limitSelected]
  )

  const handleSearchAssetByLimit = useCallback(
    ({ limit }: { limit: number }) => {
      dispatch(
        searchAsset({
          assetName: assetNameSelected ?? undefined,
          limit,
          assetType,
        })
      )
    },
    [dispatch, assetType, assetNameSelected]
  )
  return {
    /* isLoading ,*/
    handleSearchAssetByName,
    handleSearchAssetByLimit,
    assets,
  }
}
