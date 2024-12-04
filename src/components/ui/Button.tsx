import { type ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";


export const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(({ children, className = '', ...props }, ref) => {
    return (
        <button ref={ref} type="button" className={twMerge("bg-zinc-800 rounded-2xl py-2 px-3 text-xs font-semibold hover:bg-zinc-700/75 ", className)} {...props} >
            {children}
        </button>
    )
})


Button.displayName = "Button"