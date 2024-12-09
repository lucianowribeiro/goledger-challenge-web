import { Button } from "./Button";
import { MdDelete as DeleteIcon } from "react-icons/md";
import { FaPen as UpdateIcon } from "react-icons/fa";
import { Trigger } from "@radix-ui/react-dialog";
import { Root as Dialog } from "@radix-ui/react-dialog";
import { UpdateDialog } from "./dialog/UpdateDialog";
import { DeleteDialog } from "./dialog/DeleteDialog";

export function ActionButtons() {
    return (
        <div className="flex gap-3 w-1/4 justify-center">
            <Dialog>
                <Trigger asChild>
                    <Button>
                        <UpdateIcon className="size-4" />
                    </Button>
                </Trigger>
                <UpdateDialog />
            </Dialog>
            <Dialog>
                <Trigger asChild>
                    <Button>
                        <DeleteIcon className="size-4" />
                    </Button>
                </Trigger>
                <DeleteDialog />
            </Dialog>
        </div>
    )
}



