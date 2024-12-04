import { MdDelete as DeleteIcon } from "react-icons/md";
import { Button } from "./ui/Button";


export function ListTable() {
    return (
        <div className="flex flex-col flex-1 gap-2 flex-wrap">
            <div className="flex justify-between flex-wrap">
                <span className="font-bold text-xs">Title</span>
                <span className="font-bold text-xs">Date</span>
                <div className="flex">
                    <span className="font-bold text-xs">Album</span>
                    <span className="w-16" />
                </div>
            </div>
            <hr className="border-zinc-800" />
            <div className="flex flex-col gap-1">
                <div className="flex justify-between ">
                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xs capitalize">name</span>
                        <span className="font-normal text-xs capitalize">outras</span>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <span className="font-bold text-xs capitalize">name</span>
                            <span className="font-normal text-xs capitalize">outras</span>
                        </div>
                        <Button >
                            <DeleteIcon className="size-4" />
                        </Button>
                    </div>
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
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <span className="font-bold text-xs capitalize">name</span>
                            <span className="font-normal text-xs capitalize">outras</span>
                        </div>
                        <Button >
                            <DeleteIcon className="size-4" />
                        </Button>
                    </div>
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
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <span className="font-bold text-xs capitalize">name</span>
                            <span className="font-normal text-xs capitalize">outras</span>
                        </div>
                        <Button >
                            <DeleteIcon className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}