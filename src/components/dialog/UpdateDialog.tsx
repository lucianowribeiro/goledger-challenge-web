import { DialogContent } from "../Dialog";
import { Input } from "../Input";
import { IoMdText as TextIcon } from "react-icons/io";

type UpdateDialogProps = {
    assetType: string
    title: string
}
export function UpdateDialog() {
    return (
        <DialogContent
            description="Deseja atualizar o(a) ${ } ${ }" title="Confirmação" />
    )
}