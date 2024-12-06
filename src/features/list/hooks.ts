import { useSelectors } from '../../app/hooks'
import { useDispatch } from 'react-redux'
import { listAssetByType } from './listSlice'
import { getAllssetByType } from '../../http/routes/getAllAssetsByType'
import { useEffect } from 'react'

export const useList = () => {
  const dispatch = useDispatch()

  const { assets } = useSelectors(state => state.list)
  const { assetType } = useSelectors(state => state.toggle)

  useEffect(() => {
    getAllssetByType({ assetType }).then(data => {
      if (!data) return
      dispatch(
        listAssetByType({
          result: data,
          assetType,
        })
      )
    })
  }, [assetType, dispatch])

  return {
    /* isLoading ,*/
    assets: assets[assetType],
  }
}
