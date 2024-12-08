import { useList } from "../../containers/ListAssetContainer/hooks"
import type { AssetListVariants } from "../../containers/ListAssetContainer/interfaces"
import { useSelectAsset } from "../../containers/SelectedAssetContainer/hooks";
import { ActionButtons } from "./ActionButtons"
import dayjs from "dayjs";

function AssetListData({ assets, handleClickSelectAsset }: { assets: AssetListVariants, handleClickSelectAsset: ({ assetName }: { assetName: string }) => void }) {
    const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}`

    return assets.map((asset) => {
        return (
            <div key={asset["@key"]} className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap cursor-pointer  hover:bg-zinc-800/75 active:bg-zinc-800/95" onClick={() => { handleClickSelectAsset({ assetName: asset.name }) }} onKeyUp={() => { handleClickSelectAsset({ assetName: asset.name }) }}>
                    <p className="font-semibold text-xs capitalize truncate text-center w-1/4 ">{asset.name || 'aaa'}</p>
                    <p className="font-semibold text-xs text-center w-1/4 truncate">{dateConvert(asset["@lastUpdated"] || 'aaa')}</p>
                    <p className="font-semibold text-xs text-center w-1/4 truncate capitalize  ">{asset["@key"].split(":")[0] || 'aaa'}</p>
                    <ActionButtons />
                </div>
                <hr className="border-zinc-700/75" />
            </div>
        )
    })

}


export function AssetList() {
    const { assets } = useList();
    const { handleClickSelectAsset } = useSelectAsset();
    if (!assets) return
    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex">
                <p className="font-bold text-xs w-1/4 text-center">Titulo</p>
                <p className="font-bold text-xs w-1/4 text-center">Data</p>
                <p className="font-bold text-xs w-1/4 text-center">Tipo</p>
                <p className="font-bold text-xs w-1/4 text-center">Açoes</p>
            </div>
            <hr className="border-zinc-700" />
            <AssetListData assets={assets} handleClickSelectAsset={handleClickSelectAsset} />
        </section >
    )
}