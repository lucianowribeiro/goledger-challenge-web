import { useState } from "react";
import { Input } from "./Input";
import { IoIosShuffle as ShuffleIcon } from "react-icons/io";
import { IoIosSkipBackward as BackwardIcon } from "react-icons/io";
import { IoIosSkipForward as ForwardIcon } from "react-icons/io";
import { IoIosPlay as PlayIcon } from "react-icons/io";
import { IoMdRepeat as RepeatIcon } from "react-icons/io";
import { IoIosPause as PauseIcon } from "react-icons/io";
import { IoMdVolumeHigh as VolumeIcon } from "react-icons/io";
import { IoIosMusicalNotes as MusicalIcon } from "react-icons/io";
import { assetTypesMapping } from "../common/SearchBar";
import type { AssetType } from "../../api/interfaces";

export function MultimediaFooter({ assetName, assetType }: { assetName: string, assetType: AssetType }) {
    const [playing, setPlaying] = useState<boolean>(false)
    return (
        <div className="fixed z-10 bottom-0 right-0 bg-zinc-950 px-10 w-full py-5">
            <div className="flex justify-evenly gap-6">
                <div className="flex flex-col gap-2 items-center cursor-pointer ">
                    <MusicalIcon className="size-6 text-zinc-200 hover:text-zinc-50 active:text-green-600" />
                    <div className="flex items-center gap-3">
                        <p className="flex flex-col gap-2 text-xs sm:flex-row font-semibold text-zinc-200 hover:text-zinc-50 capitalize w-28 truncate hover:font-bold">
                            {assetName || `Nenhum(a) ${assetTypesMapping[assetType]} selecionado(a)`}
                        </p>
                        -
                        {assetName && <p className="text-xs font-bold text-zinc-200 hover:text-zinc-50 capitalize">{assetType}</p>}
                    </div>
                </div>
                <div className="flex flex-col gap-1 sm:w-1/4 items-center">
                    <div className="flex justify-center gap-2 sm:gap-6 ">
                        <ShuffleIcon className="size-6 text-zinc-200 hover:text-zinc-50 active:text-green-600 cursor-pointer" />
                        <BackwardIcon className="size-6 text-zinc-200 hover:text-zinc-50 active:text-green-600 cursor-pointer" />
                        {playing ? (<PauseIcon className="size-6 text-zinc-200 hover:text-zinc-50 cursor-pointer active:text-green-600 " onClick={() => setPlaying(!playing)} />) : (<PlayIcon className="size-6 text-zinc-200 hover:text-zinc-50 cursor-pointer active:text-green-600 " onClick={() => setPlaying(!playing)} />)}
                        <ForwardIcon className="size-6 text-zinc-200 hover:text-zinc-50 active:text-green-600 cursor-pointer" />
                        <RepeatIcon className="size-6 text-zinc-200 hover:text-zinc-50 active:text-green-600 cursor-pointer" />
                    </div>
                    <Input type="range" name="range" id="range" className="bg-zinc-950 w-full" />
                </div>
                <div className="flex gap-1  justify-center items-center">
                    <VolumeIcon className="size-5 text-zinc-200 hover:text-zinc-50 active:text-green-600 cursor-pointer" />
                    <Input type="range" name="range" id="range" className="bg-zinc-950 w-2/7" />
                </div>
            </div>

        </div>
    )
}       