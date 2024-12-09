import { forwardRef, type ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = { icon?: React.ReactNode, inputClassName?: string } & ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, placeholder, className, type, name, id, inputClassName, ...props }, ref) => {
    return (
        <div className={twMerge("flex gap-3 bg-zinc-800 rounded-lg items-center max-w-lg ", className)}>
            {icon}
            <input ref={ref} {...props} type={type} name={name} id={id} className={twMerge("bg-transparent border-none py-4 pr-2.5 text-xs h-5 font-semibold placeholder:text-zinc-450 border focus:outline-none w-full accent-green-600 hover:accent-green-600/75 active:accent-green-600/85", inputClassName)} placeholder={placeholder} />
        </div>
    )
})