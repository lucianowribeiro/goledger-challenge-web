import type { ComponentProps } from "react"

type InputProps = { icon: React.ReactNode } & ComponentProps<'input'>

export function Input({ icon, placeholder, type, name, id }: InputProps) {
    return (
        <div className="flex gap-3 bg-zinc-800 rounded-lg items-center ml-10 ">
            {icon}
            <input type={type} name={name} id={id} className="bg-transparent border-none py-2 pr-2.5 text-xs h-5 font-semibold placeholder:text-zinc-450 border focus:outline-none" placeholder={placeholder} />
        </div>
    )
}