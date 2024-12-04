import { ActionButtons } from "./ActionButtons";

export function ListTable() {
    return (
        <section className="flex flex-col gap-3 ">
            <div className="flex justify-between">
                <span className="font-bold text-xs">Title</span>
                <span className="font-bold text-xs">Date</span>
                <span className="font-bold text-xs">Album</span>
                <span className="font-bold text-xs w-20 pl-2">Açoes</span>
            </div>
            <hr className="border-zinc-800" />
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <ActionButtons />
                </div>
                <hr className="border-zinc-800/75" />
                <div className="flex justify-between flex-wrap">
                    <div className="flex flex-col">
                        <p className="font-bold text-xs capitalize">name</p>
                        <p className="font-normal text-xs capitalize">outras</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xs capitalize">name</p>
                        <p className="font-normal text-xs capitalize">outras</p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <ActionButtons />
                </div>
                <hr className="border-zinc-800/75" />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-xs capitalize">name</p>
                        <p className="font-normal text-xs capitalize">outras</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xs capitalize">name</p>
                        <p className="font-normal text-xs capitalize">outras</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </section >
    )
}