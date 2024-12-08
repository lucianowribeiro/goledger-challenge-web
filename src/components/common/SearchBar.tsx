import { Fragment } from "react/jsx-runtime";
import { Button } from "../ui/Button";
import type { AssetType } from "../../api/interfaces";
import { SearchInput } from "../ui/SearchInput";
import { useSelectAsset } from "../../containers/SelectedAssetContainer/hooks";
import { useList } from "../../containers/ListAssetContainer/hooks";
import { LimitActions } from "./LimitButtons";

export const assetTypesMapping = {
    song: 'Musica',
    artist: 'Artista',
    album: 'Album',
    playlist: 'Playlist'
}


export function SearchBar() {
    const { handleClickSelectAsset, assetType } = useSelectAsset()
    const { handleSearchAssetByName, handleSearchAssetByLimit } = useList()
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center lg:items-start lg:justify-between" >
            <div className="flex justify-center gap-3 flex-wrap">
                {Object.entries(assetTypesMapping).map(([key, assetType]) => {
                    return (
                        <Fragment key={key}>
                            <Button
                                onClick={
                                    () => handleClickSelectAsset({ assetType: key as AssetType })}>
                                {assetType}
                            </Button>
                        </Fragment>
                    )
                })}
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                <LimitActions handleSearchByLimit={handleSearchAssetByLimit} />
                <SearchInput assetType={assetType} onChange={handleSearchAssetByName} />
            </div>

        </div >
    )
}