import { Input } from "./ui/Input";
import { CiSearch as Search } from "react-icons/ci";

export function SearchInput({ assetType }: { assetType: string }) {
    return <Input icon={<Search className="size-5 ml-3" />} type="search" id="search" name="search" placeholder={`Pesquise a sua ${assetType}`} />
}