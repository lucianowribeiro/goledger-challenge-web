import { useQuery } from "react-query";
import { ActionButtons } from "./ActionButtons";
import { getMediaByType } from "../http/routes/get-media-by-type";
import { CgSearchLoading as LoadingIcon } from "react-icons/cg";
import { VscError as ErrorIcon } from "react-icons/vsc";
import { PiEmpty as EmptyIcon } from "react-icons/pi";
import { dateConvert } from '../http/infra/api'

export type MediaResponse = {
    result:
    {
        "@assetType": string,
        "@key": string,
        "@lastTouchBy": string,
        "@lastTx": string,
        "@lastUpdated": Date,
        album: {
            "@assetType": string,
            "@key": string
        },
        name: string
    }[]
    error: string,
    query: string

}

export function ListMediaTable({ mediaType = 'song' }: { mediaType?: string }) {

    const { data, isLoading } = useQuery<MediaResponse>({
        queryKey: ['listMedia'],
        staleTime: 1000000 * 60,
        queryFn: () => getMediaByType({ mediaType })
    })
    if (!data && isLoading) return <LoadingIcon className="size-48" />


    if (!data?.result) return <ErrorIcon className="size-48" />

    if (data?.result.length <= 0) return <EmptyIcon className="size-48" />

    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex justify-between">
                <span className="font-bold text-xs">Title</span>
                <span className="font-bold text-xs">Date</span>
                <span className="font-bold text-xs mr-1">Album</span>
                <span className="font-bold text-xs w-20 pl-2">Açoes</span>
            </div>
            <hr className="border-zinc-800" />
            {data.result.map((result) => {
                return (
                    <div key={result["@key"]} className="flex flex-col gap-2 flex-1">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-xs capitalize">{result.name}</span>
                            </div>
                            <hr className="border-zinc-800/75" />
                            <div className="flex flex-col">
                                <p className="font-bold text-xs capitalize">{dateConvert(result["@lastUpdated"])}</p>
                            </div>
                            <hr className="border-zinc-800/75" />
                            <div className="flex flex-col">
                                <p className="font-bold text-xs capitalize">{result.album["@key"]}</p>
                            </div>
                            <ActionButtons />
                        </div>
                    </div>
                )
            })}
        </section >
    )
}