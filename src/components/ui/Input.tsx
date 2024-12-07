import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = { icon?: React.ReactNode } & ComponentProps<'input'>

export function Input({ icon, placeholder, className, type, name, id, ...props }: InputProps) {
    return (
        <div className={twMerge("flex gap-3 bg-zinc-800 rounded-lg items-center max-w-lg ", className)}>
            {icon}
            <input {...props} type={type} name={name} id={id} className="bg-transparent border-none py-4 pr-2.5 text-xs h-5 font-semibold placeholder:text-zinc-450 border focus:outline-none w-full accent-zinc-100 active:accent-green-500/75" placeholder={placeholder} />
        </div>
    )
}