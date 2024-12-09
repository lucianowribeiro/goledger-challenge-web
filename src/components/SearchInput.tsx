import { type ComponentProps, forwardRef } from "react";
import type { AssetType } from "../api/interfaces";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { Input } from "./Input";


export const SearchInput = forwardRef<HTMLInputElement, ComponentProps<'input'> & { assetType: AssetType }>(({ assetType, ...props }, ref) => {
    return (<Input ref={ref} icon={<SearchIcon className="size-5 ml-3" />} type="search" id="search" name="search" placeholder={`Pesquise por ${assetType} `} {...props} />)

})