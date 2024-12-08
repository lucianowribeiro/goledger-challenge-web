import { type ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
    base: "rounded-2xl text-xs font-semibold focus:drop-shadow ring-2 ring-zinc-900 disabled:bg-zinc-500/85",
    variants: {
        variant: {
            primary: "bg-zinc-800  hover:bg-zinc-700/75  active:bg-green-600/95",
            secondary: "bg-green-600 hover:bg-green-600/75 active:bg-green-600/80 ",
            tertiary: " active:bg-zinc-600/85 hover:bg-zinc-600/75"

        },
        size: {
            default: "py-2 px-3",
            float: "px-2 py-2 rounded-full"

        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children, className, variant, size, ...props }, ref) => {
    return (
        <button ref={ref} type="button" className={button({ size, variant, className })
        } {...props} >
            {children}
        </button >
    )
})


Button.displayName = "Button"