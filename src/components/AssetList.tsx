import { useList } from "../containers/ListAssetContainer/hooks"
import type { AssetListVariants, ListState } from "../containers/ListAssetContainer/interfaces"
import { ActionButtons } from "./ActionButtons"
import type { AssetType } from '../api/interfaces';
import dayjs from "dayjs";

function AssetListData({ assets }: { assets: AssetListVariants }) {
    const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}`

    return assets.map((asset) => {
        return (
            <div key={asset["@key"]} className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap">
                    <p className="font-bold text-xs capitalize text-ellipsis text-center w-1/4">{asset.name}</p>
                    <p className="font-bold text-xs text-center w-1/4">{dateConvert(asset["@lastUpdated"])}</p>
                    <p className="font-bold text-xs text-center w-1/4 capitalize text-ellipsis">{asset["@key"].split(":")[0]}</p>
                    <ActionButtons />

                </div>
                <hr className="border-zinc-700/75" />
            </div>
        )
    })

}


export function AssetList() {
    const { assets } = useList();
    if (!assets) return
    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex">
                <p className="font-bold text-xs w-1/4 text-center">Title</p>
                <p className="font-bold text-xs w-1/4 text-center">Date</p>
                <p className="font-bold text-xs w-1/4 text-center">Album</p>
                <p className="font-bold text-xs w-1/4 text-center">Açoes</p>
            </div>
            <hr className="border-zinc-700" />
            <AssetListData assets={assets} />
        </section >
    )
}