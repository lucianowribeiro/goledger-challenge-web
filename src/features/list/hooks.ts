import { useDispatch } from 'react-redux'
import type { AssetType } from '../../http/infra/api/interfaces'
import { useSelectors } from '../../app/hooks'
import { useTypeToogle } from '../toogle/hooks'

export const useList = () => {
  /*   const dispatch = useDispatch() */

  const { assetType } = useTypeToogle()
  console.log(assetType)

  /*  const { data, isLoading } = useQuery<AssetListTypeResponse>({
    queryKey: ['assetTypeList'],
    staleTime: 1000000 * 60,
    queryFn: () => getAllAssetsByType({ assetType }),
  }) */

  /*   dispatch(
    listAssetType({
      result: [
        {
          '@assetType': 'song',
          '@key': 'dskdklsdkamds',
          '@lastTouchBy': 'dsddsdssd',
          '@lastTx': 'dadada',
          '@lastUpdated': '22/02/2021',
          name: 'ddssadasas',
          album: {
            '@assetType': 'song',
            '@key': 'song:454544',
          },
        },
      ],
      assetType: assetType,
    })
  )
 */
  const { assetList } = useSelectors(state => state.list)

  return {
    /* isLoading ,*/
    assetType: 'song' as AssetType,
    assetList,
  }
}
