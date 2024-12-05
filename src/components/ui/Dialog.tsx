import { Close as DialogClose, Content, Description as DialogDescription, Overlay as DialogOverlay, Portal as DialogPortal, Title as DialogTitle, } from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import type { ReactNode } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";

type DialogContentProps = {
    title: string,
    description: string,
    content?: ReactNode
}
export function DialogContent({ title, description, content }: DialogContentProps) {
    return (
        <DialogPortal >
            <DialogOverlay className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm" />
            <Content className="fixed z-50 top-0 right-0 h-screen bg-zinc-950 p-5 max-w-lg">
                <aside className="bg-zinc-900 p-6 rounded-xl h-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center ">
                            <DialogTitle className="text-sm font-semibold">{title}</DialogTitle>
                            <DialogClose asChild><Button className="rounded-full p-2"><CloseIcon className="size-4" /></Button></DialogClose>
                        </div>
                        <DialogDescription className="text-sm">{description}</DialogDescription>
                        {content}
                        <div className="flex gap-5 justify-evenly sm:justify-center">
                            <DialogClose asChild><Button className="w-20">Fechar</Button></DialogClose>
                            <Button className="bg-zinc-600 hover:bg-zinc-500/75 active:bg-zinc-500/85 w-36">Confirmar</Button>
                        </div>
                    </div>

                </aside>
            </Content>
        </DialogPortal>
    )
}