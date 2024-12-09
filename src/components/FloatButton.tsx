import { GoPlus as PlusIcon } from "react-icons/go";
import { Button } from "./Button";
import { type ComponentProps, forwardRef } from "react";

export const FloatButton = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(({ ...props }, ref) => {
    return (
        <Button ref={ref} variant="secondary" size="float" {...props}><PlusIcon className="size-6 sm:size-5" /></Button>
    )
})