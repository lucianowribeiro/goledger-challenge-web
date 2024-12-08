import { Fragment } from "react/jsx-runtime";
import { Button } from "../ui/Button";
import type { AssetType } from "../../api/interfaces";
import { SearchInput } from "../ui/SearchInput";
import { useSelectAsset } from "../../containers/SelectedAssetContainer/hooks";

export const assetTypesMapping = {
    song: 'Musica',
    artist: 'Artista',
    album: 'Album',
    playlist: 'Playlist'
}

export function SearchBar() {
    const { handleClickSelectAsset, assetType } = useSelectAsset()

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-start sm:justify-between" >
            <div className="flex justify-center gap-3 flex-wrap">
                {Object.keys(assetTypesMapping).map((key) => {
                    return (
                        <Fragment key={key}>
                            <Button
                                onClick={
                                    () => handleClickSelectAsset({ assetType: key as AssetType })}>
                                {assetTypesMapping[key as AssetType]}
                            </Button>
                        </Fragment>
                    )
                })}
            </div>

            <SearchInput assetType={assetType} />
        </div >
    )
}