import { useList } from "../containers/ListAssetContainer/hooks"
import type { AssetListVariants } from "../containers/ListAssetContainer/interfaces"
import { useSelectAsset } from "../containers/SelectedAssetContainer/hooks";
import dayjs from "dayjs";
import { ActionButtons } from "./ActionButtons";
import { assetTypesMapping } from "./SearchBar";

function AssetListData({ assets, handleClickSelectAsset }: { assets: AssetListVariants, handleClickSelectAsset: ({ assetName }: { assetName: string }) => void }) {
    const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}`

    return assets.map((asset) => {
        return (
            <div key={asset["@key"]} className="flex flex-col">
                <div className="flex items-center flex-wrap cursor-pointer h-12 hover:bg-zinc-800/75 active:bg-zinc-800/95" onClick={() => { handleClickSelectAsset({ assetName: asset.name }) }} onKeyUp={() => { handleClickSelectAsset({ assetName: asset.name }) }}>
                    <p className="font-semibold text-xs capitalize truncate text-center w-1/4 ">{asset.name}</p>
                    <p className="font-semibold text-xs text-center w-1/4 truncate">{dateConvert(asset["@lastUpdated"])}</p>
                    <p className="font-semibold text-xs text-center w-1/4 truncate capitalize ">{assetTypesMapping[asset["@assetType"]]}</p>
                    <ActionButtons onClick={handleClickSelectAsset} assetName={asset.name} />
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
        <section className="flex flex-col gap-1 ">
            <div className="flex">
                <p className="font-bold text-xs w-1/4 text-center">Titulo / Album</p>
                <p className="font-bold text-xs w-1/4 text-center">Data</p>
                <p className="font-bold text-xs w-1/4 text-center">Tipo</p>
                <p className="font-bold text-xs w-1/4 text-center">Açoes</p>
            </div>
            <hr className="border-zinc-700" />
            <AssetListData assets={assets} handleClickSelectAsset={handleClickSelectAsset} />
        </section >
    )
}