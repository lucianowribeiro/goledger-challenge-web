import { twMerge } from "tailwind-merge";


export function Button({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <button type="button" className={twMerge("bg-zinc-800 rounded-2xl py-2 px-3 text-xs font-semibold", className)}>{children}</button>
}
