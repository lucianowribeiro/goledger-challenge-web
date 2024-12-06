import { Fragment } from "react/jsx-runtime";
import { SearchInput } from "./SearchInput";
import { Button } from "./ui/Button";
import type { AssetType } from "../api/interfaces";
import { useTypeToogle } from "../containers/AssetTypeToogleContainer/hooks";

export const assetTypesMapping = {
    song: 'Musicas',
    artist: 'Artistas',
    album: 'Albums',
    playlist: 'Playlists'
}

export function SearchBar() {
    const { handleClicktAssetTypeToogle, assetType } = useTypeToogle()

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-start sm:justify-between" >
            <div className="flex justify-center gap-3 flex-wrap">
                {Object.keys(assetTypesMapping).map((key) => {
                    return (
                        <Fragment key={key}>
                            <Button onClick={() => handleClicktAssetTypeToogle(key as AssetType)}>{assetTypesMapping[key as AssetType]}</Button>
                        </Fragment>
                    )
                })}
            </div>

            <SearchInput assetType={assetType} />
        </div>
    )
}