import type { AssetType } from "../http/infra/api/interfaces";
import { Input } from "./ui/Input";
import { CiSearch as SearchIcon } from "react-icons/ci";

export function SearchInput({ assetType }: { assetType: AssetType }) {
    return <Input icon={<SearchIcon className="size-5 ml-3" />} type="search" id="search" name="search" placeholder={`Pesquise por ${assetType}`} />
}