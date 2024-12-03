export function ListTable() {
    return (
        <div className="flex flex-col flex-1 gap-1">
            <div className="flex justify-between">
                <p className="font-bold text-xs">Title</p>
                <p className="font-bold text-xs">date</p>
                <p className="font-bold text-xs">album</p>
            </div>
            <hr className="border-zinc-800" />
            <div className="flex flex-col">
                <span>name</span>
                <span>outras</span>
            </div>
            <div className="flex flex-col">
                <span>name</span>
                <span>outras</span>
            </div>
            <div className="flex flex-col">
                <span>name</span>
                <span>outras</span>
            </div>
        </div>
    )
}