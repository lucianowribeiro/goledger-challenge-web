import { GoPlus as PlusIcon } from "react-icons/go";
import { Button } from "./ui/Button";

export function FloatButton({ ...props }) {
    return (
        <Button className="absolute right-2 bottom-2.5 z-30 sm:static rounded-full px-2" {...props}><PlusIcon className="size-5" /></Button>
    )
}