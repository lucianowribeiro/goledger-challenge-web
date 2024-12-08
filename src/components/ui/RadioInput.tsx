import { GrMultimedia as MultimediaIcon } from "react-icons/gr";
import { assetTypesMapping } from "../common/SearchBar";
import { Input } from "./Input";
export function RadioInput() {
    return (
        <div>
            <div className="flex items-center gap-3">
                <Input type="radio" id="song" placeholder={"Escolhe o seu tipo de midia"} checked
                    className="h-0 w-4"
                />
                <label htmlFor="song " className="text-sm">{assetTypesMapping.song}</label>
            </div>
            <div>
                <Input type="radio" id="album" placeholder={"Escolhe o seu tipo de midia"}>
                </Input>
                <label htmlFor="album">{assetTypesMapping.album}</label>
            </div>
            <div>
                <Input type="radio" id="artist" placeholder={"Escolhe o seu tipo de midia"}>
                </Input>
                <label htmlFor="artist">{assetTypesMapping.artist}</label>
            </div>
            <div>
                <Input type="radio" id="album" placeholder={"Escolhe o seu tipo de midia"}>
                </Input>
                <label htmlFor="album">{assetTypesMapping.playlist}</label>
            </div>
        </div>
    )
}