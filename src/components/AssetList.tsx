import { useList } from "../containers/ListAssetContainer/hooks"
import type { AssetListVariants, ListState } from "../containers/ListAssetContainer/interfaces"
import type { AssetType } from "../api/interfaces"
import { ActionButtons } from "./ActionButtons"


/* function AssetListData({ assets }: { assets: AssetListVariants[] }) {
   /*  const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}` 

   if (!assets) return

   return assets?.map((asset) => {
       return (
           <div key={(asset as any)["@key"]} className="flex flex-col gap-2">
               <div className="flex items-center flex-wrap">
                   <p className="font-bold text-xs capitalize w-1/3 text-ellipsis">{(asset as any).name}</p>
                   <p className="font-bold text-xs w-1/3">{(asset as any)["@lastUpdated"]}</p>
                   <p className="font-bold text-xs capitalize w-1/3 text-ellipsis">{(asset as any)["@key"].split(":")[0]}</p>
                   <div className="w-1/3">
                       <ActionButtons />
                   </div>
               </div>
               <hr className="border-zinc-700/75" />
           </div>
       )
   })

} */


export function AssetList() {
    const listState = useList();
    console.log(listState)
    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex">
                <p className="font-bold text-xs w-1/4 text-center">Title</p>
                <p className="font-bold text-xs w-1/4 text-center">Date</p>
                <p className="font-bold text-xs w-1/4 text-center">Album</p>
                <p className="font-bold text-xs w-1/4 text-center">Açoes</p>
            </div>
            <hr className="border-zinc-700" />

            {/* {listState?.assets && <AssetListData assets={listState.assets} />} */}
        </section >
    )
}