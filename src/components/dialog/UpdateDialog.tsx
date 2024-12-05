import { DialogContent } from "../ui/Dialog";
import { Input } from "../ui/Input";
import { IoMdText as TextIcon } from "react-icons/io";

type UpdateDialogProps = {
    mediaType: string
    title: string
}
export function UpdateDialog() {
    return (
        <DialogContent
            description="Deseja atualizar o(a) ${ } ${ }" title="Confirmação" />
    )
}