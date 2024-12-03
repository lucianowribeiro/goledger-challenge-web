import { SearchInput } from "./SearchInput";
import { Button } from "./ui/Button";

export function SearchBar() {
    return (
        <div className="flex  justify-between" >
            <div className="flex gap-3">
                <Button>Playlists</Button>
                <Button>Podcasts</Button>
                <Button>Albuns</Button>
                <Button>Artists</Button>
            </div>
            <SearchInput assetType="music" />
        </div>
    )
}