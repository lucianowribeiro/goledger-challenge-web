import { GoPlus as Plus } from "react-icons/go";
import { Button } from "./ui/Button";

export function FloatButton() {
    return (
        <Button className="
        absolute right-4 bottom-4 z-30 sm:static rounded-full px-2"><Plus className="size-5" /></Button>
    )
}