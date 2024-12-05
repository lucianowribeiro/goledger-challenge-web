import { useList } from "../features/list/hooks"
import type { ListState } from "../features/list/interfaces"
import type { AssetType } from "../http/infra/api/interfaces"
import { ActionButtons } from "./ActionButtons"


function AssetListData({ assetList, assetType }: { assetList: ListState['assetList'], assetType: AssetType }) {
    /*  const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}` */

    if (!assetList) return

    return assetList[assetType].map((assetList) => {
        return (
            <div key={assetList["@key"]} className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap">
                    <p className="font-bold text-xs capitalize w-1/3 text-ellipsis">{assetList.name}</p>
                    <p className="font-bold text-xs w-1/3">{assetList["@lastUpdated"]}</p>
                    <p className="font-bold text-xs capitalize w-1/3 text-ellipsis">{assetList["@key"].split(":")[0]}</p>
                    <div className="w-1/3">
                        <ActionButtons />
                    </div>
                </div>
                <hr className="border-zinc-700/75" />
            </div>
        )
    })

}


export function AssetList() {
    const { assetList, assetType } = useList()
    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex">
                <p className="font-bold text-xs w-1/4 text-center">Title</p>
                <p className="font-bold text-xs w-1/4 text-center">Date</p>
                <p className="font-bold text-xs w-1/4 text-center">Album</p>
                <p className="font-bold text-xs w-1/4 text-center">Açoes</p>
            </div>
            <hr className="border-zinc-700" />
            <AssetListData assetList={assetList} assetType={assetType} />
        </section >
    )
}