import { Button } from "./Button";
import { CreateDialog } from "./dialog/CreateDialog";
import { FloatButton } from "./FloatButton";
import { SearchBar } from "./SearchBar";
import { Trigger as DialogTrigger, Root as Dialog } from "@radix-ui/react-dialog";
import { IoIosList as ListIcon } from "react-icons/io";

export function Header() {
    return (
        <Dialog>
            <header className="flex flex-col gap-3">
                <div className="flex flex-1 justify-center sm:justify-between">
                    <div className="flex gap-2 items-center">
                        <img src="../logo.svg" className="size-5 bg-white rounded-full" alt="go leader logo" />
                        <p className="font-semibold"> Go Ledger - Challenge</p>
                    </div>
                    <div className="flex items-center gap-4 justify-end w-1/3">
                        <div>
                            <Button size="float">{<ListIcon size={20} />}</Button>
                        </div>
                        <DialogTrigger asChild>
                            <FloatButton />
                        </DialogTrigger>
                    </div>
                </div>
                <SearchBar />
            </header>
            <CreateDialog />
        </Dialog >
    )
}