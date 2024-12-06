import { GoPlus as PlusIcon } from "react-icons/go";
import { Button } from "./ui/Button";
import { type ComponentProps, forwardRef } from "react";

export const FloatButton = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(({ ...props }, ref) => {
    return (
        <Button ref={ref} className="absolute right-5 -bottom-5 z-30 sm:static rounded-full px-2" {...props}><PlusIcon className="size-6 sm:size-5" /></Button>
    )
})