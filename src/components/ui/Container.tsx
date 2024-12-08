export function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative container mx-auto bg-zinc-900 sm:mt-5 sm:mb-28 rounded-md ">
            <section className="flex flex-col p-5 gap-6">
                {children}
            </section>
        </main>
    )
}
