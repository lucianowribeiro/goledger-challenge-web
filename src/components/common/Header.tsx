import { CreateDialog } from "../dialog/CreateDialog";
import { FloatButton } from "../ui/FloatButton";
import { SearchBar } from "./SearchBar";
import { Trigger as DialogTrigger, Root as Dialog } from "@radix-ui/react-dialog";

export function Header() {
    return (
        <Dialog>
            <header className="flex flex-col gap-3">
                <div className="flex flex-1 justify-center sm:justify-between">
                    <div className="flex gap-2 items-center">
                        <img src="../logo.svg" className="size-5 bg-white rounded-full" alt="go leader logo" />
                        <p className="font-semibold"> Go Ledger - Challenge</p>
                    </div>
                    <DialogTrigger asChild>
                        <FloatButton />
                    </DialogTrigger>
                </div>
                <SearchBar />
            </header>
            <CreateDialog />
        </Dialog>
    )
}