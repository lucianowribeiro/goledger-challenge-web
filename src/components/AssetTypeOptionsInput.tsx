import type { RegisterOptions, UseFormRegister } from "react-hook-form";
import type { CreateAssetForm } from "../containers/CreateAssetContainer/hooks";
import { Input } from "./Input";
import { assetTypesMapping } from "./SearchBar";

export function AssetTypeOptionsInput({ register }: { register: UseFormRegister<CreateAssetForm> }) {
    return <fieldset className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
            <Input {...register('assetType')} type="radio" id="song" name="assetType" className="bg-transparent w-5 " value="song"
            />
            <label htmlFor="song" className="text-sm w-full">{assetTypesMapping.song}</label>
        </div>
        <div className="flex items-center gap-3">
            <Input {...register('assetType')} type="radio" id="album" name="assetType" className="bg-transparent  w-5" value="album" />
            <label htmlFor="album" className="text-sm w-full">{assetTypesMapping.album}</label>
        </div>
        <div className="flex items-center gap-3">
            <Input {...register('assetType')} type="radio" id="artist" name="assetType" className="bg-transparent  w-5 " value="artist" />
            <label htmlFor="artist" className="text-sm w-full">{assetTypesMapping.artist}</label>
        </div>
        <div className="flex items-center gap-3">
            <Input {...register('assetType')} type="radio" id="playlist" name="assetType" className="bg-transparent  w-5 " value="playlist" />
            <label htmlFor="playlist" className="text-sm w-full">{assetTypesMapping.playlist}</label>
        </div>
    </fieldset>
}
