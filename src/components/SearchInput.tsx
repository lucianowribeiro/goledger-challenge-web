import { Input } from "./ui/Input";
import { CiSearch as SearchIcon } from "react-icons/ci";

export function SearchInput({ mediaType }: { mediaType: string }) {
    return <Input icon={<SearchIcon className="size-5 ml-3" />} type="search" id="search" name="search" placeholder={`Pesquise a sua ${mediaType}`} />
}