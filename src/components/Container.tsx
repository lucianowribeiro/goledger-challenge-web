export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative container mx-auto bg-zinc-900 sm:my-5 rounded-md ">
            <div className="flex flex-col p-5 gap-4 ">
                {children}
                <br className="my-2 sm:my-0 sm:w-0" />
            </div>
        </div>
    )
}
