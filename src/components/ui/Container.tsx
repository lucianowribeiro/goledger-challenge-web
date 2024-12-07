export function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative container mx-auto bg-zinc-900 sm:my-5 rounded-md ">
            <section className="flex flex-col p-5 gap-5">
                {children}
                <br className="my-1 sm:my-0 sm:w-0" />
            </section>
        </main>
    )
}
