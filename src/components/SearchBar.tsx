import { SearchInput } from "./SearchInput";
import { Button } from "./ui/Button";

export function SearchBar() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-start sm:justify-between" >
            <div className="flex justify-center gap-3 flex-wrap">
                <Button>Playlists</Button>
                <Button>Podcasts</Button>
                <Button>Albuns</Button>
                <Button>Artists</Button>
            </div>
            <SearchInput assetType="music" />
        </div>
    )
}